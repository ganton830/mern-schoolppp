import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class TablesPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Users Table' className='shadow-01' excerpt=''>
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

      
        </div>

      </div>
    );
  }
}
////////////////////////////////////////////////////////////
// if (this.props.ChrList.Loading === 'false') {

  // const apis = this.props.ChrList.list.map((item, i) => {
  //     return <tr key={item._id}><td className="ellipsis">{item._id}      </td>
  //         <td>{item.Character_Name}</td>
  //         <td className="ellipsis">{item.Character_ID}</td>
  //         <td className="ellipsis">{item.Access_Token}</td>
  //         <td className="ellipsis">{item.Refresh_Token}</td>
  //         <td>
             
  //         </td>
  //     </tr>

  // });

  // return <div  >
  //     <table className='table'>
  //         <tbody>
  //             <tr>
  //                 <th> Id </th>
  //                 <th> Character Name </th>
  //                 <th> Character ID</th>
  //                 <th> Access Token </th>
  //                 <th> Refresh Token</th>
  //                 <th> Actions</th>
  //             </tr>
  //             {apis}
  //         </tbody>
  //     </table>
  // </div>
// } 
// else {
//   return <div  >
//       <h1>Loading...</h1>
//   </div>
// }
// ///////////////////////////////////////////////////
// export const PostsListRow = ({post, onDelete}) => {
//   return (
//     <tr key={post.id}>
//       <td>{post.id}</td>
//       <td>{post.title}</td>
//       <td>{post.category_id}</td>
//       <td>
//         <div className="btn-toolbar pull-right">
//           <Link to={`/posts/${post.id}`} className="btn btn-primary">Edit</Link>
//           <a onClick={onDelete.bind(this, post)} className="btn btn-danger">Delete</a>
//         </div>
//       </td>
//     </tr>
//   )
// };
//////////////////////////////////////////////////////////

export default TablesPage;
