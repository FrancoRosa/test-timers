from subprocess import check_output
from os import uname
from re import search

is_rpi = uname()[4] != 'x86_64'


def device_restart():
    check_output(['reboot', 'now'])


def device_shutdown():
    check_output(['shutdown', 'now'])


def get_wifi_card():
    # If card is currently connected to network
    info = check_output(['ip', 'route', 'list'])
    info = info.decode('ascii').split(' ')
    for text in info:
        if search('^wl', text):
            return text

    # If card is not connected to network
    info = check_output(['ip', 'link', 'show'])
    lines = info.decode('ascii').split('\n')
    lines.reverse()
    for line in lines:
        for text in line.split(': '):
            if search('^wl', text):
                return text


def chunks(lst, n):
    return [lst[i:i + n] for i in range(0, len(lst), n)]


def insert_dash(text, group_len):
    return '-'.join(chunks(text, group_len))


def get_device_id():
    info = check_output(['cat', '/proc/cpuinfo'])
    lines = info.decode('ascii').split('\n')
    for line in lines:
        if search('^Serial', line):
            serial = line.split(': ')[1]
            return insert_dash(serial, 4)


def get_commit():
    return check_output(['git', 'log', "--pretty=format:'%h'", '-n', '1'])


def scan_wifi():
    card = get_wifi_card()
    command_output = check_output(['iwlist', card, 'scan'])
    text_output = command_output.decode('ascii').split('\n')
    result = []
    for text in text_output:
        if 'Signal level=' in text:
            snr = text.split('Signal level=')[1]
        if 'ESSID:' in text:
            ssid = text.split(':')[1]

            result.append({
                'ssid': ssid,
                'snr': snr
            })
    return result


def network_conf(ssid, passwd):
    file = open('/etc/wpa_supplicant/wpa_supplicant.conf', 'w')
    config = (
        'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n'
        'country=US\n'
        'update_config=1\n'
        '\n'
        'network={\n'
        f' ssid="{ssid}"\n'
        f' psk="{passwd}"\n'
        ' scan_ssid=1\n'
        '}\n'
        '\n'
    )
    file.write(config)
    file.close()
    card = get_wifi_card()
    check_output(['wpa_cli', '-i', card, 'reconfigure'])
