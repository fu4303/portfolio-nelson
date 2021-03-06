import Image from "next/image"
import { device } from "./device"

const CustomImage = props => {
  let full = false

  if (props.size == "large") {
    full = true
  } else {
    full = false
  }

  return (
    <div className={full ? "large" : "small"} width={props.size}>
      <style jsx>{`
        .large {
          width: 100%;
          margin: 2rem auto;
          max-width: 656px;
        }

        .small {
          width: 100%;
          margin: 2rem auto;
          max-width: 444px;
        }

        @media ${device.desktop} {
          .large {
            margin: 1rem auto;
          }
          .small {
            margin: 1rem auto;
          }
        }

        @media only screen and (min-width: 848px) {
          .large {
            width: 200%;
            margin: 1rem -1.25rem;
          }
          .small {
            width: ;
            margin: 1rem auto;
          }
        }
      `}</style>
      <Image
        src={props.src}
        alt=""
        width={`${props.width}`}
        height={`${props.height}`}
      />
    </div>
  )
}

export default CustomImage
