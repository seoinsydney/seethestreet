import styles from '@/styles/components.module.scss'

const ReadMore = ({link, text}) => {
  return (
    <div className={styles.readMore}>
      <a href={link}>
          {text}
      </a>
    </div>
  );
};

export default ReadMore;