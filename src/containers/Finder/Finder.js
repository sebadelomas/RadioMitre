import React, { Component } from "react";
import Articles from "../../components/Articles/Articles";
import Spinner from "../../components/UI/Spinner/Spinner";
import styles from "./Finder.module.css";
import { getNews } from '../../services/News/News';

class Finder extends Component {
  state = {
    news: [],
  };

  componentDidMount = async () => {
    try {
      const news = await getNews();
      this.setState({ news });
    } catch (error) {
      console.log(error);
      alert("Ocurrió un error");
    }
  };

  render() {
    let results =  <Spinner />;

    if (this.state.news.length) {
      results = <Articles data={this.state.news} />
    }

    return (
      <div className={styles.Container}>
        {results}
      </div>
    );
  }
}

export default Finder;
