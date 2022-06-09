import styled from 'styled-components'
import '@google/model-viewer'

type TProps = {
    contentCategory : string,
    url : string
}

const MediaPreview = ({contentCategory, url} : TProps) => {

    console.log(contentCategory)

    switch(contentCategory) {
        case 'image':
            return <img src={url} alt="Image" style={{"width":"100%", "height": "100%", "objectFit" : "cover", "objectPosition" : "center"}}/>
        case 'video':
            return <video 
            muted
            loop
            onMouseOver={event => {
                const target = event.target as HTMLVideoElement
                target.play()
              }}
              onMouseOut={event => {
                const target = event.target as HTMLVideoElement
                target.pause()
                target.currentTime = 0
            }}
            src={url} style={{"width":"100%", "height": "100%", "objectFit" : "cover", "objectPosition" : "center"}}/>
        case 'application':
            return <div>Unsupported Type</div>
        case 'model':
            const modelProps = {
                'src': url,
                'alt': "model",
                'auto-rotate': 'true',
                'autoplay': 'false',
                'shadow-intensity': '1',
                'ar-status': 'not-presenting',
                'rotation-per-second': '20deg',
            }
            return <model-viewer {...modelProps} style={{"width":"100%", "height": "100%", "objectFit" : "cover", "objectPosition" : "center"}}/>
        default:
            return <div>Unknown media type</div>
    }
}

export const NFTPreview = styled(({ className, mediaUri, contentCategory }) => {
    return (
        <div className={className}>
            <MediaPreview contentCategory={contentCategory} url={mediaUri} />
        </div>
    )
})`
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(#282759, #4B2877);
    cursor: pointer;
`