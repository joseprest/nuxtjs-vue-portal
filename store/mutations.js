const updateInstallations = (state) => {
  let installationByFilters = []

  const curInstallations = state.originalInstallations.installations
  const filterData = state.filteredData

  Object.keys(filterData).map(key => {
    curInstallations.map(cur => {
      if (filterData[key].length > 0) {
        filterData[key].map(val => {
          if (key === 'location') {
            if (cur.location === val.v) {
              installationByFilters.push(cur)
            }
          } else {
            if (cur.tags.includes(val.v)) {
              if (!installationByFilters.includes(cur)) {
                installationByFilters.push(cur)
              }
            }
          }
        })
      }
    })
  })

  if (installationByFilters.length === 0) {
    installationByFilters = curInstallations
  }


  return installationByFilters
}

export default {
  getFeaturedInstallations: (state, data) => {
    state.featuredInstallations = data
  },
  getInstallations: (state, data) => {
    const getMdPhotos = (arr) => {
      return arr.map(a => {
        return {
          src: a.file._versions.md._downloadURL,
          annotations: a.annotations
        }
      })
    }

    const getTags = (arr) => {
      let initial = []
      arr.forEach(a => {
        initial.push(...a.tags)
      })

      return initial
    }

    const installs = data.installations.map(d => {
      return {
        name: d.name,
        location: d.location,
        featured: d.featured,
        photos: getMdPhotos(d.photos),
        tags: getTags(d.photos)
      }
    })

    state.installations = {
      installations: installs,
      features: installs.filter(i => i.featured),
      locations: data.locations,
      tagGroups: data.tagGroups
    }

    // Backup api response in order to use when filtering
    state.originalInstallations = {
      installations: installs,
      features: installs.filter(i => i.featured),
      locations: data.locations,
      tagGroups: data.tagGroups
    }
  },
  submitTakeTour: (state, data) => {
    state.takeTour = data.statusText
  },
  addFilterData: (state, data) => {
    const key = Object.keys(data)[0]
    state.filteredData[key] = data[key]

    const installsByFilter = updateInstallations(state)
    if (installsByFilter.length > 0) {
      state.installations.installations = installsByFilter
    }
  },
  removeFilterData: (state, data) => {
    let arrVal = state.filteredData
    Object.keys(arrVal).map(k => {
      let index = arrVal[k].indexOf(data);
      if (index > -1) {
        arrVal[k].splice(index, 1);
      }
    })

    const installsByFilter = updateInstallations(state)
    if (installsByFilter.length > 0) {
      state.installations.installations = installsByFilter
    }
  }
}
