

export const Button = (props: { text: string }) => {

    const { text } = props;

    return (
        <button className="btn">
            {text}
        </button>
    )
}