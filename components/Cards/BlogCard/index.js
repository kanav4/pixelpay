import Image from 'next/image';
import styles from './BlogCard.module.css';
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

export default function BlogCard({post}) {
  function getDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
  let pbg =
  post.featured_media === 0
    ? ""
    : post._embedded["wp:featuredmedia"][0]["source_url"];
  return (
    <div className={styles.card}>
      <Link href={post?.link}><a>
      <div className={styles.imgContainer}>
        <Image
          className="logo"
          src={pbg}
          alt="blog image"
          height={290}
          width={391}
          objectFit="cover"
        />
      </div>
      </a></Link>
      <div className={styles.datetime}>By Vaibhav Lall | {getDate(post?.modified)}</div>
      <Link href={post?.link}><a>
      <div className={styles.heading} dangerouslySetInnerHTML={{__html: post?.title.rendered}}>
      </div>
      </a></Link>
      <div className={styles.scReadmore}>
          <Link href={post?.link}><a><p>Read More</p><span><BsArrowRight /></span></a></Link>
        </div>
    </div>
  );
}
