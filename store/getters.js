export default {
  featuredInstallations: (state) => (state.featuredInstallations),
  featuredData: (state) => {
    const filteredData = state.installations.features

    return filteredData.map(d => {
      let src = d.photos[0].src

      return { src }
    })
  },
  submitTakeTour: (state) => (state.takeTour),
  filterOptions: (state) => {
    let filters = []

    const getLocationOptions = (location) => {
      return location.map(lo => {
        return {
          text: lo,
          value: {
            t: lo,
            v: lo
          }
        }
      })
    }

    const getTagOptions = (tags) => {
      return tags.map(tag => {
        if (tag.name) {
          return {
            text: tag.name,
            value: {
              t: tag.name,
              v: tag._id
            }
          }
        }
      })
    }

    filters.push({
      name: 'Location',
      options: getLocationOptions(state.installations.locations)
    })

    state.installations.tagGroups.map(tag => {
      filters.push({
        name: tag.name,
        options: getTagOptions(tag.tags)
      })
    })

    return filters
  },
  filteredData: (state) => {
    const filters = state.filteredData
    const data = []
    Object.keys(filters).map(k => {
      data.push(...filters[k])
    })
    return data
  },
  installations: (state) => {
    return state.installations.installations
  }
}
