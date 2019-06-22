import React, { useContext } from 'react'
import styled from 'styled-components'
import { getWidthContext } from '../../utils/getWidthScreen'
import Config from '../../constants/Constants'

const BoxSlideImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-60deg, #2a7aff 0%, #f7618b 100%);
  top: 0;
  left: 0;
  /* border-radius: 0 0 0 180vh / 0 0 0 40vh; */
  z-index: 10;
`
const BackgroundCover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 8;
`
const CurveBottom = styled.div`
  position: absolute;
  bottom: -1rem;
  width: 100%;
  z-index: 10;
`
const SlideShowImage = (props): React.FC => {
  const useScreen = useContext(getWidthContext)

  return (
    <BoxSlideImage>
      <BackgroundCover src={``} data-src="/static/images/PicMedium/pictest.jpg" alt="medium" />
      <CurveBottom>
        {useScreen <= Config.sizeMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="420" height="100">
            <defs>
              <path id="prefix__header_dicut_mobile-a" d="M420 100H0V.044c116.37 63.055 257.231 99.95 409 99.95h11z" />
            </defs>
            <use fill="#102131" fillRule="evenodd" href="#prefix__header_dicut_mobile-a" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="1470" height="389">
            <defs>
              <path
                id="prefix__header_dicut-a"
                d="M.064 0C297.895 240.038 712.934 388.966 1172 388.966c87.786 0 176.31.032 265.07.003 2.644 0 5.287-.002 7.93-.003 8.55-.003 16.874-.063 25-.176v.21H0V0h.064z"
              />
            </defs>
            <use fill="#102131" fillRule="evenodd" href="#prefix__header_dicut-a" />
          </svg>
        )}
      </CurveBottom>
    </BoxSlideImage>
  )
}

export default SlideShowImage
