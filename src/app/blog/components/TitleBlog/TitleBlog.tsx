import style from './TitleBlog.module.css'; 

export const TitleBlog = ({ children }: { children: React.ReactNode }) => (
  <>
    <article className={style.blogTitle}>
      <div>
        {children}
      </div>
    </article>
  </>
)
