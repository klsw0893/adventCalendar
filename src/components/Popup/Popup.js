import styles from './Popup.module.css';
import Film from './../../assets/film.png'

function Popup({ content, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={`${styles.content} ${content.type === "text" ? styles.centered : ''}`}>
          {content.contentText}
        </div>
        {content.type !== "text" && (
          <>
            <div>
              {
                content.embeddedQuiz && (<iframe src={content.embeddedQuiz} width="90%" height="100%" frameborder="0" allowfullscreen></iframe>)
              }
            </div>
            {content.embeddedLink.link && (<div className={styles.contentText}>
              
                
                  <a href={content.embeddedLink.link} target="_blank" rel="noopener noreferrer">
                    <img src={content.embeddedLink.pic} className={styles.videoPic} alt="Embedded link picture" />
                  </a>
                
              
            </div>
            )
            }
            {(content.video.netflixLink || content.video.otherVidLink) && (
            <div className={styles.filmPic}>
              <img src={Film} className={styles.filmPic} alt="Film picture" />
            </div>
            )}
            <div className={styles.contentText}>
              {
                content.video.netflixLink && (
                  <a href={content.video.netflixLink} target="_blank" rel="noopener noreferrer">
                    <img src={content.video.netflixPic} className={styles.videoPic} alt="Netflix logo" />
                  </a>
                )
              }
              {
                content.video.otherVidLink && (
                  <a href={content.video.otherVidLink} target="_blank" rel="noopener noreferrer">
                    <img src={content.video.otherVidPic} className={styles.videoPic} alt="Videa logo" />
                  </a>
                )
              }
            </div>
          </>)}
      </div>
    </div>
  );
}

export default Popup;
