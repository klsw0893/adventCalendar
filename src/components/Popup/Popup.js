import styles from './Popup.module.css';
import Film from './../../assets/film.png'

function Popup({ content, onClose }) {
  const handleDesktopDownload = () => {
    const link = document.createElement("a");
    link.href = content.download.desktop;
    link.download = "desktop.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMobilDownload = () => {
    const link = document.createElement("a");
    link.href = content.download.mobil;
    link.download = "mobil.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        {content.contentText.content && content.type === "text" &&(<div className={styles.centered}>
          <p>{content.contentText.content}</p>
          {content.type === "text" && content.contentText.author !== "" && (<p className={styles.author}>{content.contentText.author}</p>)}
        </div>)}
        {content.contentText.content && content.type !== "text" &&(<div className={styles.content}>
          {content.contentText.content}
        </div>)}
        {content.type === "quiz" && (
          <div className={styles.quiz}>
            {
              content.embeddedQuiz && (<iframe src={content.embeddedQuiz} className ={styles.quiz} frameborder="0" allowfullscreen></iframe>)
            }
          </div>)}
        {content.embeddedLink.link && (
          <div className={styles.contentText}>
            <a href={content.embeddedLink.link} target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + content.embeddedLink.pic} className={styles.musicPic} alt="Embedded link picture" />
            </a>
          </div>
        )
        }
        <div className={`${styles.contentText} ${styles.videoLinks}`}>
          {
            content.video.netflixLink && (
              <a href={content.video.netflixLink} className={styles.videoListsBox} target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + content.video.netflixPic} className={styles.videoPic} alt="Netflix logo" />
              </a>
            )
          }
          {content.type === "movie" && (content.video.netflixLink || content.video.otherVidLink) && (
          <div className={styles.filmPic}>
            <img src={Film} className={styles.filmPic} alt="Film picture" />
          </div>
        )}
          {
            content.video.otherVidLink && (
              <a href={content.video.otherVidLink} className={styles.videoListsBox} target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + content.video.otherVidPic} className={styles.videoPic} alt="Videa logo" />
              </a>
            )
          }
        </div>
        {content.type === "downloadable" && (
          <div className = {styles.videoLinks}>
            <span onClick={handleDesktopDownload} style={{ cursor: "pointer" }}>
               <img src={process.env.PUBLIC_URL + content.download.deskPic} className={styles.downloadPic} alt="food" />
            </span>
            <span onClick={handleMobilDownload} style={{ cursor: "pointer" }}>
               <img src={process.env.PUBLIC_URL + content.download.mobilPic} className={styles.downloadPic} alt="food" />
            </span>
          </div>
        )
        }
        {content.type === "food" && (
          <div className={styles.foodPic}>
            <img src={process.env.PUBLIC_URL + content.food} className={styles.foodPic} alt="food" />
          </div>
        )
        }
        {content.type==="special" && content.day ==="6" && <div className={styles.santaImage}></div>}
        {content.type==="special" && content.day ==="24" && <div className={styles.xmasImage}></div>}
      </div>
    </div>
  );
}

export default Popup;
