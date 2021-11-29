import axios from "axios";

let host;
if (window.location.hostname == "localhost") {
  host = "http://localhost:3000";
} else {
  host = "https://biomedicas.herokuapp.com";
}
