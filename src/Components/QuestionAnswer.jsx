const QuestionAnswer = () => {
  return (
    <div className="container mx-auto px-5 pt-10">
      <div className="mb-4">
        <strong className="text-xl">What is context api?</strong>
        <p className="text-lg font-medium">
          The Context API is a React structure that enables you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application.
        </p>
      </div>
      <div className="mb-4">
        <strong className="text-xl">What is semantics in html?</strong>
        <p className="text-lg font-medium">
          The HTML semantics refers to the tags that provide meaning to an HTML
          page rather than just presentation. It makes HTML more comprehensible
          by better defining the different sections and layout of web pages.
        </p>
      </div>
      <div className="mb-4">
        <strong className="text-xl">
          What is the differnt between "Inline tag and block tag" ?
        </strong>
        <p className="text-lg font-medium">
          Compared to display: inline, the major difference is that display:
          inline-block allows to set a width and height on the element. Also,
          with display: inline-block, the top and bottom margins/paddings are
          respected, but with display: inline they are not. Compared to display:
          block, the major difference is that display: inline-block does not add
          a line-break after the element, so the element can sit next to other
          elements.
        </p>
      </div>

      <div className="">
        <strong></strong>
      </div>
    </div>
  );
};
export default QuestionAnswer;
