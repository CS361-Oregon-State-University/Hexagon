const dropdown = (props: {
    dropdownName: string,
    dropdownItems: string[]
}) => {
    return (
        <div className="flex-auto dropdown my-2">
            <div tabIndex={0} role="button" className="btn btn-info m-1 w-80">{props.dropdownName}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {props.dropdownItems.map((item, index) => (
                    <li key={index}>
                        {props.dropdownName !== "Set Goal" ? (
                            <div className="form-control">
                                <label className="flex label cursor-pointer">
                                    <span className="grow label-text w-[100px]">{item}</span>
                                    <input type="checkbox" className="flex-none checkbox checkbox-primary ml-5" />
                                </label>
                            </div>
                        ) : (
                            <>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text w-[100px]">{item}</span> 
                                        <input type="radio" name="radio-10" className="radio checked:bg-purple-500 ml-5" checked />
                                    </label>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default dropdown;