import { fetchHygraph } from '@/app/api/Hygraph/Hygraph-api'
import { AboutPageInfo, HomePageData, Project } from '@/app/types/dataTypes'

export const GET_ALL_DATA = async (): Promise<HomePageData> => {
  const query = `
  query Homepage {
    homepage(where: {slug: "home"}) {
      slug
      title
      technologies {
        id
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
      faQ {
        id
        title
        content
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
      technologies (first : 25 ) {
        id
        name
        iconSvg
      }
      completeDescription {
        raw
      }
      carouseImage {
        image01 {
          url
        }
        image02 {
          url
        }
        image03 {
          url
        }
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
      sectionOne {
        title
        image {
          url
        }
      }
      sectionTwo {
        title
        content {
          raw
        }
        image {
          url
        }
      }
      sectionThree {
        title
        rowText
        figure {
          url
        }
        card {
          title
          iconSvg
          content {
            text
          }
          id
        }
      }
      sectionFour {
        title
        rowText
        card {
          title
          id
          iconSvg
          content {
            text
          }
        }
      }
      technologies {
        name
        id
        iconSvg
      }
    }
  }
  
  `
  return fetchHygraph(query)
}
