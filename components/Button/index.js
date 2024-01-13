import styles from './Button.module.css'

export default function Button({
  title="default", 
  color,
  textColor, 
  width,
  border,
  imgSrc, 
  imgSize,
  
}) {

  return (
    <button className={styles.button} style={{backgroundColor: color, color: textColor, width: width, border: border}}>
    {imgSrc && <img src={imgSrc} alt="Button Icon" style={{marginRight:'9px', marginBottom:'2px', width: imgSize, height: imgSize}}/>}{title}</button>
  )
}

