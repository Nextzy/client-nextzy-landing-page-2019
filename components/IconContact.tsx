import React, { useContext } from 'react'
import styled from 'styled-components'
import { getWidthContext } from '../utils/getWidthScreen'
import Config from '../constants/Constants'
const BoxIconContact = styled.div`
  position: fixed;
  z-index: 500;
  color: white;
  transition: 680ms 100ms ease-in-out;
  right: 5rem;
  bottom: ${({ indexActive }) => (indexActive === 7 ? `4rem` : `0rem`)};
  div {
    margin: 0.5rem 0 0.5rem 0;
  }
  svg {
    cursor: pointer;
    transition: 200ms;
    transition-timing-function: ease-in-out;
    fill: #fff;
    &:hover {
      fill: #f7618b;
    }
  }
`
const VerizontalPrefixParagraph = styled.div`
  display: inline-block;
  :before {
    content: '';
    position: absolute;
    border-bottom: 2px solid white;
    width: 2rem;
    transform: rotate(90deg);
    right: -4px;
  }
`
const IconContact = (props): React.FC => {
  const { indexActive } = props
  const getScreenContext = useContext(getWidthContext)
  if (getScreenContext && getScreenContext <= Config.sizeMobile) {
    return null
  } else {
    return (
      <BoxIconContact indexActive={indexActive}>
        <div onClick={() => (window.location = 'https://github.com/Nextzy')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M8.707 12.885c.997 0 1.808.988 1.808 2.204 0 1.216-.81 2.204-1.808 2.204-.997 0-1.808-.988-1.808-2.204 0-1.216.811-2.204 1.808-2.204zm0 3.673c.599 0 1.085-.659 1.085-1.469s-.486-1.47-1.085-1.47c-.598 0-1.084.66-1.084 1.47 0 .81.486 1.47 1.084 1.47zm6.871-3.673c.997 0 1.808.988 1.808 2.204 0 1.216-.811 2.204-1.808 2.204s-1.808-.988-1.808-2.204c0-1.216.811-2.204 1.808-2.204zm0 3.673c.598 0 1.085-.659 1.085-1.469s-.487-1.47-1.085-1.47-1.085.66-1.085 1.47c0 .81.487 1.47 1.085 1.47zm.552-5.51c1.943 0 3.063 1.817 3.24 3.122.108.801.027 1.602-.246 2.447-.358 1.105-1.121 1.869-2.267 2.268-1.044.365-2.183.562-3.483.604-.183.006-.367.008-.55.008-.149 0-.297-.002-.446-.003l-.44-.002c-1.323.02-2.893-.021-4.456-.47-1.86-.535-2.698-1.614-2.894-3.724-.134-1.453.238-2.568 1.139-3.41.542-.506 1.234-.772 2.055-.792.593-.015 1.19.008 1.767.03.424.016.85.032 1.274.034.93.004 1.883-.016 2.803-.035l.53-.012c.304-.006.61-.019.915-.031.335-.014.67-.028 1.005-.033h.054zm2.307 5.34c.238-.737.309-1.43.215-2.118-.136-1.01-1.032-2.487-2.525-2.487h-.04c-.329.006-.658.02-.987.033-.31.012-.62.025-.93.032l-.53.01c-.923.02-1.877.041-2.82.037a38.253 38.253 0 0 1-1.298-.035 28.29 28.29 0 0 0-1.722-.03c-.642.016-1.174.218-1.584.6-.723.675-1.02 1.59-.907 2.8.167 1.8.81 2.636 2.37 3.084 1.474.424 2.98.462 4.254.443l.452.003c.322.002.644.005.966-.005 1.227-.04 2.297-.225 3.271-.564.934-.326 1.528-.916 1.815-1.803zm2.318-7.672c.73 1.02 1.123 2.255 1.167 3.668a11.666 11.666 0 0 1-.45 3.651c-.608 2.074-1.905 3.518-3.856 4.294-1.096.436-2.302.636-3.814.635l-.987.001-.754.002c-1.174 0-2.371-.016-3.551-.118-2.36-.204-4.143-1.24-5.298-3.08-.549-.875-.881-1.88-1.076-3.256-.236-1.645-.166-2.967.22-4.16A6.23 6.23 0 0 1 3.42 8.381c.053-.067.07-.095.05-.234-.059-.417-.032-.836-.005-1.24.075-1.167.308-2.278.695-3.338.019-.05.041-.1.068-.156l.14-.31.264.035c1.349.175 2.492.77 3.527 1.388.217.129.428.27.639.411.181.122.363.244.55.357a.28.28 0 0 0 .143.04 14.729 14.729 0 0 1 4.994.01.166.166 0 0 0 .058-.019c.301-.183.6-.371.9-.56.446-.28.908-.57 1.372-.843.7-.41 1.467-.574 2.208-.732l.535-.116.117.277c.33.78.557 1.622.675 2.505l.006.043c.088.66.18 1.34.115 2.018-.03.321.068.498.283.799zm.024 7.11c.316-1.08.457-2.23.42-3.42-.041-1.28-.378-2.347-1.03-3.26-.251-.351-.473-.716-.417-1.301.056-.592-.03-1.23-.112-1.848l-.006-.043a9.09 9.09 0 0 0-.51-2.036c-.7.15-1.361.296-1.947.64-.456.267-.905.55-1.354.832-.302.19-.604.38-.908.565a.838.838 0 0 1-.552.112 14.017 14.017 0 0 0-4.754-.008.956.956 0 0 1-.632-.135 15.258 15.258 0 0 1-.577-.375c-.2-.133-.4-.268-.607-.39-.896-.535-1.876-1.052-2.984-1.251a11.1 11.1 0 0 0-.62 3.01c-.026.404-.05.783-.003 1.125.046.327-.012.558-.201.797a5.517 5.517 0 0 0-.942 1.742c-.355 1.096-.414 2.275-.192 3.826.18 1.268.48 2.183.971 2.966 1.042 1.66 2.595 2.557 4.75 2.743 1.401.121 2.845.117 4.241.113h.991c1.426.006 2.54-.184 3.548-.585 1.758-.699 2.878-1.948 3.427-3.82z" />
          </svg>
        </div>
        <div onClick={() => (window.location = 'https://www.facebook.com/nextzy/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.87 20.991h-3.755v-8.066H8.046V9.22h2.069V7.14c0-1.91 1.159-4.14 4.426-4.14 1.151 0 1.997.111 2.032.116l.347.047-.084 3.466-.382-.003s-.859-.009-1.795-.009c-.697 0-.79.178-.79.883v1.72h3.076l-.17 3.706H13.87v8.065zm-2.98-.8h2.203v-8.066h2.94l.097-2.104h-3.037V7.499c0-.832.186-1.683 1.565-1.683.555 0 1.081.003 1.42.006l.047-1.95a17.604 17.604 0 0 0-1.585-.071c-2.69 0-3.65 1.724-3.65 3.339v2.88H8.822v2.105h2.068v8.066z" />
          </svg>
        </div>
        <div onClick={() => (window.location = 'https://www.linkedin.com/company/nextzy-technologies/about/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M5.425 3.01c.629 0 1.228.243 1.677.73.45.458.719 1.068.689 1.708 0 .67-.27 1.28-.719 1.737-.45.457-1.018.7-1.617.7h-.06c-.599.031-1.227-.243-1.676-.7A2.465 2.465 0 0 1 3 5.448c0-.64.24-1.25.719-1.738a2.352 2.352 0 0 1 1.706-.7zm1.228 3.748c.36-.335.539-.823.539-1.31 0-.488-.18-.945-.54-1.31a1.732 1.732 0 0 0-1.227-.519c-.509 0-.958.183-1.287.518-.36.366-.54.823-.54 1.31 0 .488.18.976.54 1.311a1.8 1.8 0 0 0 1.257.518c.48.03.929-.183 1.258-.518zm-.06 1.737c.479 0 .898.427.898.915v10.697c0 .457-.419.884-.898.884H4.198c-.48 0-.899-.427-.899-.915V9.41c0-.519.39-.915.869-.915h2.425zm.3 11.612V9.41c0-.153-.15-.305-.3-.305H4.168c-.15 0-.27.152-.27.305v10.666c0 .153.15.305.3.305h2.395c.15 0 .3-.122.3-.274zm9.88-11.917c2.365 0 4.192 1.89 4.192 4.328v7.863c0 .305-.3.61-.599.61h-2.994c-.3 0-.599-.305-.599-.61v-6.552c0-.549-.12-.976-.42-1.25a1.749 1.749 0 0 0-1.257-.518c-.928 0-1.646.792-1.646 1.798v6.583c0 .335-.33.548-.6.548H9.558c-.27 0-.599-.213-.599-.548V9.074c0-.335.33-.579.6-.579h2.993c.3 0 .6.305.6.61v.426a4.013 4.013 0 0 1 2.993-1.34h.63zm3.593 12.16v-7.832c0-2.072-1.557-3.718-3.563-3.718h-.629c-1.108 0-2.156.549-2.754 1.402l-.839.853v-1.92l-.03-.03H9.587V20.38h3.294v-6.522c0-1.34.988-2.377 2.245-2.408.63 0 1.228.244 1.677.701.39.397.569.945.569 1.677l.03 6.552h2.934l.03-.03z" />
          </svg>
        </div>
        <div>
          <a href="mailto:geek@nextzy.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M21.17 5.009H2.824A.83.83 0 0 0 2 5.845v11.38a.83.83 0 0 0 .824.837H21.17a.83.83 0 0 0 .824-.836V5.845a.83.83 0 0 0-.824-.836zm-18.346.656H21.17c.077 0 .145.052.168.127l-9.341 5.923-9.341-5.923a.177.177 0 0 1 .168-.127zm-.177.876L9.366 10.8l-6.72 5.41V6.54zm18.7 10.68c0 .1-.08.18-.177.18H2.824a.178.178 0 0 1-.177-.18v-.175l7.301-5.857 1.876 1.191a.32.32 0 0 0 .345 0l1.876-1.19 7.302 5.856v.175zm0-1.011l-6.737-5.393 6.737-4.237v9.63z" />
            </svg>
          </a>
        </div>
        <VerizontalPrefixParagraph />
      </BoxIconContact>
    )
  }
}

const BoxIconContactPageContact = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  transition: 500ms;
  margin-bottom: 51px;
  div {
    margin: 0 0.5rem 0 0.5rem;
  }
  svg {
    cursor: pointer;
    transition: 200ms;
    transition-timing-function: ease-in-out;
    fill: #fff;
    &:hover {
      fill: #f7618b;
      transform: scale(1.5);
    }
  }
`
const IconContactPageContact = (props): React.FC => {
  const { indexActive } = props
  const getScreenContext = useContext(getWidthContext)
  if (getScreenContext && getScreenContext <= Config.sizeMobile) {
    return (
      <BoxIconContactPageContact>
        <div onClick={() => (window.location = 'https://github.com/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M8.707 12.885c.997 0 1.808.988 1.808 2.204 0 1.216-.81 2.204-1.808 2.204-.997 0-1.808-.988-1.808-2.204 0-1.216.811-2.204 1.808-2.204zm0 3.673c.599 0 1.085-.659 1.085-1.469s-.486-1.47-1.085-1.47c-.598 0-1.084.66-1.084 1.47 0 .81.486 1.47 1.084 1.47zm6.871-3.673c.997 0 1.808.988 1.808 2.204 0 1.216-.811 2.204-1.808 2.204s-1.808-.988-1.808-2.204c0-1.216.811-2.204 1.808-2.204zm0 3.673c.598 0 1.085-.659 1.085-1.469s-.487-1.47-1.085-1.47-1.085.66-1.085 1.47c0 .81.487 1.47 1.085 1.47zm.552-5.51c1.943 0 3.063 1.817 3.24 3.122.108.801.027 1.602-.246 2.447-.358 1.105-1.121 1.869-2.267 2.268-1.044.365-2.183.562-3.483.604-.183.006-.367.008-.55.008-.149 0-.297-.002-.446-.003l-.44-.002c-1.323.02-2.893-.021-4.456-.47-1.86-.535-2.698-1.614-2.894-3.724-.134-1.453.238-2.568 1.139-3.41.542-.506 1.234-.772 2.055-.792.593-.015 1.19.008 1.767.03.424.016.85.032 1.274.034.93.004 1.883-.016 2.803-.035l.53-.012c.304-.006.61-.019.915-.031.335-.014.67-.028 1.005-.033h.054zm2.307 5.34c.238-.737.309-1.43.215-2.118-.136-1.01-1.032-2.487-2.525-2.487h-.04c-.329.006-.658.02-.987.033-.31.012-.62.025-.93.032l-.53.01c-.923.02-1.877.041-2.82.037a38.253 38.253 0 0 1-1.298-.035 28.29 28.29 0 0 0-1.722-.03c-.642.016-1.174.218-1.584.6-.723.675-1.02 1.59-.907 2.8.167 1.8.81 2.636 2.37 3.084 1.474.424 2.98.462 4.254.443l.452.003c.322.002.644.005.966-.005 1.227-.04 2.297-.225 3.271-.564.934-.326 1.528-.916 1.815-1.803zm2.318-7.672c.73 1.02 1.123 2.255 1.167 3.668a11.666 11.666 0 0 1-.45 3.651c-.608 2.074-1.905 3.518-3.856 4.294-1.096.436-2.302.636-3.814.635l-.987.001-.754.002c-1.174 0-2.371-.016-3.551-.118-2.36-.204-4.143-1.24-5.298-3.08-.549-.875-.881-1.88-1.076-3.256-.236-1.645-.166-2.967.22-4.16A6.23 6.23 0 0 1 3.42 8.381c.053-.067.07-.095.05-.234-.059-.417-.032-.836-.005-1.24.075-1.167.308-2.278.695-3.338.019-.05.041-.1.068-.156l.14-.31.264.035c1.349.175 2.492.77 3.527 1.388.217.129.428.27.639.411.181.122.363.244.55.357a.28.28 0 0 0 .143.04 14.729 14.729 0 0 1 4.994.01.166.166 0 0 0 .058-.019c.301-.183.6-.371.9-.56.446-.28.908-.57 1.372-.843.7-.41 1.467-.574 2.208-.732l.535-.116.117.277c.33.78.557 1.622.675 2.505l.006.043c.088.66.18 1.34.115 2.018-.03.321.068.498.283.799zm.024 7.11c.316-1.08.457-2.23.42-3.42-.041-1.28-.378-2.347-1.03-3.26-.251-.351-.473-.716-.417-1.301.056-.592-.03-1.23-.112-1.848l-.006-.043a9.09 9.09 0 0 0-.51-2.036c-.7.15-1.361.296-1.947.64-.456.267-.905.55-1.354.832-.302.19-.604.38-.908.565a.838.838 0 0 1-.552.112 14.017 14.017 0 0 0-4.754-.008.956.956 0 0 1-.632-.135 15.258 15.258 0 0 1-.577-.375c-.2-.133-.4-.268-.607-.39-.896-.535-1.876-1.052-2.984-1.251a11.1 11.1 0 0 0-.62 3.01c-.026.404-.05.783-.003 1.125.046.327-.012.558-.201.797a5.517 5.517 0 0 0-.942 1.742c-.355 1.096-.414 2.275-.192 3.826.18 1.268.48 2.183.971 2.966 1.042 1.66 2.595 2.557 4.75 2.743 1.401.121 2.845.117 4.241.113h.991c1.426.006 2.54-.184 3.548-.585 1.758-.699 2.878-1.948 3.427-3.82z" />
          </svg>
        </div>
        <div onClick={() => (window.location = 'https://facebook.com/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.87 20.991h-3.755v-8.066H8.046V9.22h2.069V7.14c0-1.91 1.159-4.14 4.426-4.14 1.151 0 1.997.111 2.032.116l.347.047-.084 3.466-.382-.003s-.859-.009-1.795-.009c-.697 0-.79.178-.79.883v1.72h3.076l-.17 3.706H13.87v8.065zm-2.98-.8h2.203v-8.066h2.94l.097-2.104h-3.037V7.499c0-.832.186-1.683 1.565-1.683.555 0 1.081.003 1.42.006l.047-1.95a17.604 17.604 0 0 0-1.585-.071c-2.69 0-3.65 1.724-3.65 3.339v2.88H8.822v2.105h2.068v8.066z" />
          </svg>
        </div>
        <div onClick={() => (window.location = 'https://www.linkedin.com')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M5.425 3.01c.629 0 1.228.243 1.677.73.45.458.719 1.068.689 1.708 0 .67-.27 1.28-.719 1.737-.45.457-1.018.7-1.617.7h-.06c-.599.031-1.227-.243-1.676-.7A2.465 2.465 0 0 1 3 5.448c0-.64.24-1.25.719-1.738a2.352 2.352 0 0 1 1.706-.7zm1.228 3.748c.36-.335.539-.823.539-1.31 0-.488-.18-.945-.54-1.31a1.732 1.732 0 0 0-1.227-.519c-.509 0-.958.183-1.287.518-.36.366-.54.823-.54 1.31 0 .488.18.976.54 1.311a1.8 1.8 0 0 0 1.257.518c.48.03.929-.183 1.258-.518zm-.06 1.737c.479 0 .898.427.898.915v10.697c0 .457-.419.884-.898.884H4.198c-.48 0-.899-.427-.899-.915V9.41c0-.519.39-.915.869-.915h2.425zm.3 11.612V9.41c0-.153-.15-.305-.3-.305H4.168c-.15 0-.27.152-.27.305v10.666c0 .153.15.305.3.305h2.395c.15 0 .3-.122.3-.274zm9.88-11.917c2.365 0 4.192 1.89 4.192 4.328v7.863c0 .305-.3.61-.599.61h-2.994c-.3 0-.599-.305-.599-.61v-6.552c0-.549-.12-.976-.42-1.25a1.749 1.749 0 0 0-1.257-.518c-.928 0-1.646.792-1.646 1.798v6.583c0 .335-.33.548-.6.548H9.558c-.27 0-.599-.213-.599-.548V9.074c0-.335.33-.579.6-.579h2.993c.3 0 .6.305.6.61v.426a4.013 4.013 0 0 1 2.993-1.34h.63zm3.593 12.16v-7.832c0-2.072-1.557-3.718-3.563-3.718h-.629c-1.108 0-2.156.549-2.754 1.402l-.839.853v-1.92l-.03-.03H9.587V20.38h3.294v-6.522c0-1.34.988-2.377 2.245-2.408.63 0 1.228.244 1.677.701.39.397.569.945.569 1.677l.03 6.552h2.934l.03-.03z" />
          </svg>
        </div>
        <div onClick={() => (window.location = 'https://www.gmail.com')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M21.17 5.009H2.824A.83.83 0 0 0 2 5.845v11.38a.83.83 0 0 0 .824.837H21.17a.83.83 0 0 0 .824-.836V5.845a.83.83 0 0 0-.824-.836zm-18.346.656H21.17c.077 0 .145.052.168.127l-9.341 5.923-9.341-5.923a.177.177 0 0 1 .168-.127zm-.177.876L9.366 10.8l-6.72 5.41V6.54zm18.7 10.68c0 .1-.08.18-.177.18H2.824a.178.178 0 0 1-.177-.18v-.175l7.301-5.857 1.876 1.191a.32.32 0 0 0 .345 0l1.876-1.19 7.302 5.856v.175zm0-1.011l-6.737-5.393 6.737-4.237v9.63z" />
          </svg>
        </div>
      </BoxIconContactPageContact>
    )
  } else {
    return null
  }
}
export { IconContactPageContact }
export default IconContact
