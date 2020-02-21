import React from 'react';
import {News} from './News';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  state = {
    news: []
  }
  componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=eb3df88c77404e108b15e89561cfefd9')
        .then(res => {
            const news = res.data.articles;
            this.setState({news});
        })
        .catch(err => {
            console.log('Err: ', err);
        });
  }
  render() {
    return (
        <div className="App">
            <div className="News container">
                <h1>Google News Feeds!</h1>
                <section className="list-group text-center">
                {
                    this.state.news.map((item, index) => {
                        return (<News {...item} key={index} />);
                    })
                }
                </section>
            </div>
        </div>
    )
  }
}

export default App;
