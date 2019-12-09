import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SingleMovie from '../singlemovie'

const MovieList = ({
  movies
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={movies.sort((a, b) => b.year.localeCompare(a.year))}
      renderItem={({
        item: {
          title, poster, year, id, genres
        }
      }) => {
        return (
          <SingleMovie
            title={title}
            id={id}
            year={year}
            genres={genres}
            poster={poster}
          />
        );
      }}
      keyExtractor={(movie) => (`${movie.id}`)}
    />
  </View>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  })).isRequired,
}

export default MovieList;