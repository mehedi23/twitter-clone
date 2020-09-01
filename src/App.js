import React from 'react';
import './App.css';
import SideBar from './component/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widget/Widget'



function App() {
  return (
    <div className="app">

      < SideBar />
      <Feed
        name= "Mehedi Hassan"
        userName= "mehedi"
        verified= "hasansetu"
        time= "5h"
        text= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors "
        image="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg"
        avatar="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-1/p200x200/90001499_2582231632047071_4494092996433674240_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=re3UfHLguxIAX-CRJxl&_nc_ht=scontent.fdac24-1.fna&tp=6&oh=d3dab39b7a65431a5f8a22ef194880ba&oe=5F7364C5"
      />
      <Widgets/>
    </div>
  );
}

export default App;
