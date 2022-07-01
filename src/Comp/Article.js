import moment from "moment";
const Article = ({title, date, length, snippet }) => {
  return (
    <>
      <>
        <h1>{title}</h1>
        <p>{moment(date).format('dddd Do, YYYY')}</p>
        <p>{length} minute read</p>
        <p>{snippet}</p>
      </>
    </>
  );
};

export default Article;
