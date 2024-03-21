const FAQPost = (props: {
    question: string;
    answer: string;
    category: string;
}) => {
    return (
        <>
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    {props.question}
                </div>
                <div className="collapse-content">
                    {props.answer}
                    <div className="divider"></div>
                    Category: {props.category}
                </div>
            </div>
        </>
    )
}

export default FAQPost;