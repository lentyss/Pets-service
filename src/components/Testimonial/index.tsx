import styles from './Testimonial.module.css';

interface TestimonialProps {
    name: string;
    comment: string;
    avatarUrl: string;
}

export const Testimonial = ({ name, comment, avatarUrl }: TestimonialProps) => {
 return (
    <div className={styles.testimonial}>
        <img src={avatarUrl} alt={name} className={styles.avatar} />
        <div className={styles.testimonialContent}>
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.comment}>{comment}</p>
        </div>
    </div>
 );
};