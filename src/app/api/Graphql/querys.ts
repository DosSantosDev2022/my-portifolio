import { fetchHygraph } from '@/app/api/Hygraph/Hygraph-api'
import { AboutPageInfo, HomePageData, Project } from '@/app/types/dataTypes'

export const GET_ALL_DATA = async (): Promise<HomePageData> => {
  const query = `
  query Homepage {
    homepage(where: {slug: "home"}) {
      slug
      title
      technologies {
        name
        iconSvg
      }
      socials {
        name
        iconSvg
        id
        url
      }
      description {
        raw
      }
      profileImage {
        url
      }
      sectionOne {
        ... on Section {
          id
          title
          content {
            raw
          }
        }
      }
      sectionTwo {
        card {
          title
          id
          iconSvg
          content {
            raw
          }
        }
        figure {
          url
        }
      }
      sectionStack {
        title
        card {
          title
          iconSvg
          content {
            raw
          }
        }
      }
    }
  }
  `
  return fetchHygraph(query)
}

export const GET_ALL_PROJECTS = async (): Promise<Project> => {
  const query = `
  query Projects {
    project {
      title
      slug
      description
      deployLink
      codeLink
      coverImage {
        url
      }
      technologies {
        name
        iconSvg
      }
      completeDescription {
        raw
      }
    }
  }
  `
  return fetchHygraph(query)
}

export const GET_DATA_ABOUT_PAGE = async (): Promise<AboutPageInfo> => {
  const query = `
  query AboutPage {
    aboutPage(where: {slug: "about"}) {
      headerContact {
        title
        image {
          url
        }
      }
      profileContact {
        title
        content {
          raw
        }
        image {
          url
        }
      }
    }
  }
  
  `
  return fetchHygraph(query)
}
