import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;
        console.log(location.state);
        if(location.state===undefined){ //그냥 url을 입력하여 /detail로 접속할 시 리디렉트
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }
}
export default Detail;