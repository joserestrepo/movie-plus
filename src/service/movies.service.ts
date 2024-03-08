import axiosInstance from '@config/axios/axios.config'
import { envs } from '@config/envs'

export class MoviesService {
  static getTrendingVideos() {
    return axiosInstance.get(`${envs.url_api}/trending/all/day?language=es-CO`)
  }

  static getGenreMovie() {
    return axiosInstance.get(`${envs.url_api}/genre/movie/list?language=es`)
  }

  static mostPopularMovie(genreId: number) {
    return axiosInstance.get(`${envs.url_api}/discover/movie`, {
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        page: 1,
        language: 'es',
      },
    })
  }

  static getMovieCategory(url: string, params: object) {
    return axiosInstance.get(`${envs.url_api}${url}`, {
      params: {
        page: 1,
        language: 'es-CO',
        ...params,
      },
    })
  }

  static async getMovieById(movieId: number): Promise<any> {
    try {
      const movieDetail = await axiosInstance.get(
        `${envs.url_api}/movie/${movieId}`,
        {
          params: {
            page: 1,
            language: 'es-CO',
          },
        },
      )
      const credits = await axiosInstance.get(
        `${envs.url_api}/movie/${movieId}/credits`,
        {
          params: {
            page: 1,
            language: 'es-CO',
          },
        },
      )

      return new Promise((resolve) => {
        const director = credits.data.crew.find(
          (member: any) => member.job === 'Director',
        )
        resolve({
          data: {
            id: movieDetail.data.id,
            title: movieDetail.data.title,
            release_date: movieDetail.data.release_date,
            overview: movieDetail.data.overview,
            poster_path: movieDetail.data.poster_path,
            vote_average: movieDetail.data.vote_average,
            runtime: movieDetail.data.runtime,
            genres: movieDetail.data.genres,
            director,
            production_companies: movieDetail.data.production_companies,
          },
        })
      })
    } catch (error) {
      throw error
    }
  }
}

/**
 *  title: movieDetail.data.title,
          release_date: movieDetail.data.release_date,
          overview: movieDetail.data.overview,
          poster_path: movieDetail.data.poster_path,
          vote_average: movieDetail.data.vote_average,
          runtime: movieDetail.data.runtime,
          director,
          production_companies: movieDetail.data.production_companies,
*/
