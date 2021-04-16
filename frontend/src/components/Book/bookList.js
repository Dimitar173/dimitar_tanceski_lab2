import React from 'react'
import {Link} from 'react-router-dom';

function bookList(props) {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Име</th>
                            <th scope={"col"}>Категорија</th>
                            <th scope={"col"}>Залиха</th>
                            <th scope={"col"}>Автор</th>
                        </tr>
                        </thead>
                        <tbody>
                            {props.books.map(function (data, id){
                                return (<tr>
                                    <td>{data.name}</td>
                                    <td>{data.category}</td>
                                    <td>{data.availableCopies}</td>
                                    <td>{data.author.name} {data.author.surname}</td>
                                    <td className={"text-right"}>
                                        <a title={"Delete"} className={"btn btn-danger"} onClick={() => {props.onDelete(data.id)}}>
                                            Delete
                                        </a>
                                        <Link className={"btn btn-info ml-2"} to={`/books/edit/${data.id}`} onClick={() => {props.onSelected(data.id)}}>
                                            Edit
                                        </Link>
                                        <a className={"btn btn-info ml-2"} onClick={() => {props.markTaken(data.id)}}>
                                            Mark as taken
                                        </a>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-7 col-md-3 d-flex justify-content-center ">
                            <Link className={"btn btn-block btn-info"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bookList
