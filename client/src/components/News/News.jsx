import React from "react";
import NavBar from "../NavBar/NavBar";
import "./News.css"

export default function News(){
    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="news-container">
                <div className="art-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at suscipit dui, posuere pulvinar magna. In at rhoncus neque, finibus consequat nibh. Cras elementum consectetur sem eget tempus. Aliquam molestie tellus et lorem scelerisque, porta euismod urna malesuada. Sed id placerat ante. Nullam ornare vehicula massa molestie egestas. Nunc libero mauris, facilisis non scelerisque id, tempus ac sem.</p>
                    <img src="http://www.selvaadentro.com.ar/wp-content/uploads/2020/04/zoco1-700x394.jpeg" alt="imagen" />
                </div>

                <div className="art-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at suscipit dui, posuere pulvinar magna. In at rhoncus neque, finibus consequat nibh. Cras elementum consectetur sem eget tempus. Aliquam molestie tellus et lorem scelerisque, porta euismod urna malesuada. Sed id placerat ante. Nullam ornare vehicula massa molestie egestas. Nunc libero mauris, facilisis non scelerisque id, tempus ac sem.</p>
                    <img src="http://www.selvaadentro.com.ar/wp-content/uploads/2020/04/zoco1-700x394.jpeg" alt="imagen" />
                </div>

                <div className="art-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at suscipit dui, posuere pulvinar magna. In at rhoncus neque, finibus consequat nibh. Cras elementum consectetur sem eget tempus. Aliquam molestie tellus et lorem scelerisque, porta euismod urna malesuada. Sed id placerat ante. Nullam ornare vehicula massa molestie egestas. Nunc libero mauris, facilisis non scelerisque id, tempus ac sem.</p>
                    <img src="http://www.selvaadentro.com.ar/wp-content/uploads/2020/04/zoco1-700x394.jpeg" alt="imagen" />
                </div>
            </div>
        </div>
    )
}