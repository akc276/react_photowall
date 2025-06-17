import React, {Component} from "react";
import PhotoWall from "./PhotoWall";
import AddPhotoWrapper from "./AddPhoto";
import {Routes, Route, Link} from 'react-router-dom';
import * as actions from '../redux/actions';
import Single from "./Single";

class Main extends Component {
    constructor() {
        super();
        // this.state = {
        //     posts: [],
        //     screen: "photo" //photo, addPhoto
        // }

        // this.removePost = this.removePost.bind(this);
        // this.navigate = this.navigate.bind(this);

    }

    state = {
        loading: true
    }

    componentDidMount() {
        this.props.startLoadingPosts().then(() => {
            this.setState(() => ({
                loading: false
            }));
        });
        this.props.startLoadingComments();
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log("Previous State: ", prevState);
        console.log("Previous Props: ", prevProps);
        // console.log("Current State: ", this.state);
        // if (prevState.posts !== this.state.posts) {
        //     console.log("Posts have been updated!");
        // }
    }

    fetchPostsSimulateDB() {
        return [{
            id: 0,
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: 1,
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
            id: 2,
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }

    // removePost(postRemoved) {
    //     console.log("Removing post: ", postRemoved);
    //     this.setState((state) => ({
    //         posts: state.posts.filter(post => post !== postRemoved)
    //     }));
    // }

    // navigate() {
    //     // console.trace("Navigate function called");
    //     // console.log("Navigating to Add Photo");
    //     this.setState((state) => ({
    //         screen: state.screen === "photo" ? "addPhoto" : "photo"
    //     })); 
    // }

    // addPhoto(postSubmitted) {
    //     this.setState((state) => ({
    //         posts: state.posts.concat([postSubmitted])
    //     }));
    // }

    render() {
        return (
            <div>
                <h1><Link to="/">Photo Wall</Link></h1>
                <Routes>

                    <Route path="/" element={<div>
                            <PhotoWall {...this.props}/>
                        </div>
                    } />
                    <Route
                        path="/AddPhoto"
                        element={
                            <AddPhotoWrapper {...this.props} />
                        }
                    />
                    {/* <Route path="/AddPhoto" element={
                        <div>
                            <AddPhoto onAddPhoto={(addedPost) => {
                                const navigate = useNavigate();
                                this.addPhoto(addedPost)
                                navigate("/");
                            }}/>
                        </div>
                    } /> */}
                    <Route path="/Single/:id" element={
                        <div>
                            <Single loading={this.loading} {...this.props} />
                        </div>
                    } />
                </Routes>
            </div>
        )
    }
    // render() {
    //     return (
    //     <div className="main">
    //         {
    //             this.state.screen === "photo" && (
    //                 <div>
    //                     <h1>Photo Wall</h1>
    //                     <PhotoWall posts={this.state.posts} onRemovePost={this.removePost} onNavigate = {this.navigate}/>
    //                 </div>
    //             )
    //         }
    //         {
    //             this.state.screen === "addPhoto" && (
    //                 <div>
    //                     <AddPhoto />
    //                 </div>
    //             )
    //         }
            
    //     </div>
    //     );
    // }
}
export default Main;
