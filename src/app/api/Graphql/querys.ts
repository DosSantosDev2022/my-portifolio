import { fetchHygraph } from '@/app/api/Hygraph/Hygraph-api'
import { HomePageData, Project } from '@/app/types/homepage'

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
    }
  }
  
  
  `
  return fetchHygraph(query)
}
