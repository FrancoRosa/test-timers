# colors
red='\e[1;31m'
grn='\e[1;32m' 
rst='\e[0m'

#banner
echo "${grn} 
    _______________________
   /_  __/ ____/ ___/_  __/
    / / / __/  \__ \ / /   
   / / / /___ ___/ // /    
  /_/ /_____//____//_/     
  ____________  _____________  _____
 /_  __/  _/  |/  / ____/ __ \/ ___/
  / /  / // /|_/ / __/ / /_/ /\__ \ 
 / / _/ // /  / / /___/ _, _/___/ / 
/_/ /___/_/  /_/_____/_/ |_|/____/  
${rst}"

# ask to install
while true; do
    read -p "Do you wish to install? (y/n) " yn
    case $yn in
        [Yy]* ) echo "${grn}... installing${rst}"; break;;
        [Nn]* ) echo "${red}... installation canceled${rst}";exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

# fix locale
if [ "$LC_ALL" = "" ]; then
export LC_ALL=en_GB.UTF-8
fi

if [ "$LANGUAGE" = "" ]; then
export LANGUAGE=en_GB.UTF-8
fi

# installation process
install_dependency () {
    name=$1
    install_command=$2
    if eval "$name --version"
    then
        echo "${grn} ... $name already installed, skipping${rst}"
    else
        echo "${grn} ... install $name ${rst}"
        eval $3
        eval $install_command
    fi
}

install_dependency "node" "sudo apt install nodejs -y" "curl -sSL https://deb.nodesource.com/setup_16.x | sudo bash -"
install_dependency "git" "sudo apt-get install git -y"
install_dependency "pip3" "sudo apt-get install python3-pip -y"
install_dependency "pm2" "sudo npm i -g pm2"
install_dependency "serve" "sudo npm i -g serve"


echo "${grn}... clone repo and install dependencies${rst}"
sudo rm -r /home/pi/test-timers
cd /home/pi
git clone https://github.com/FrancoRosa/test-timers.git

# install backend dependencies
sudo pip3 install flask-cors

# configure pm2
sudo pm2 startup

# enable backend and frontend from boot 
sudo pm2 start /home/pi/test-timers/rpi/api.py --name "timers_backend" --interpreter python3
sudo pm2 serve /home/pi/test-timers/build 80 --name "timers_frontend"
sudo pm2 save

# Create browser init script 
"chromium-browser --kiosk http://localhost:80" > /home/pi/.Xsession

while true; do
    read -p "Do you wish to reboot? (y/n) " yn
    case $yn in
        [Yy]* ) echo "${grn}... rebooting${rst}"; sudo reboot now;break;;
        [Nn]* ) echo "${red}... dont forget to reboot later${rst}";break;;
        * ) echo "Please answer yes or no.";;
    esac
done



echo "${grn}... done${rst}"