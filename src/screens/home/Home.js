import React, {Component} from 'react';
import './Home.css';
import SearchAppBar from '../../common/header/SearchAppBar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIconFill from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const constants = {
	userInfoUrl:"https://api.instagram.com/v1/users/self",
	userMediaUrl:"https://api.instagram.com/v1/users/self/media/recent"
  }
  

const styles =  theme => ({
  card: {
    maxWidth: 1100,
  },
  avatar: {
    margin: 10,
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
  formControl: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
  },
  comment:{
    display:'flex',
    alignItems:'center'
  },
  hr:{
    marginTop:'10px',
    borderTop:'2px solid #f2f2f2'
  },
  gridList:{
    width: 1100,
    height: 'auto',
    overflowY: 'auto',
  },
  grid:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:90
  }
});

class Home extends Component{

  constructor(props) {
    super(props);
    if (sessionStorage.getItem('access-token') == null) {
      props.history.replace('/');
    }
    this.state = {
      data: [],
      filteredData:[],
      userData:{},
      likeSet:new Set(),
      comments:{},
      currrentComment:""
    }
  }

  componentDidMount(){
    this.getUserInfo();
    this.getMediaData();
  }

  render(){
    const{classes} = this.props;
    return(
      <div>
        <SearchAppBar search 
          userProfileUrl={this.state.userData.profile_picture}
          screen={"Home"}
          searchHandler={this.onSearchEntered}
          handleLogout={this.logout}
          handleAccount={this.navigateToAccount}/>
        <div className={classes.grid}>
          <GridList className={classes.gridList} cellHeight={'auto'}>
            {this.state.filteredData.map(item => (
              <GridListTile key={item.id}>
                <HomeItem
                  classes={classes}
                  item={item}
                  onLikedClicked={this.likeClickHandler}
                  onAddCommentClicked={this.addCommentClickHandler}
                  commentChangeHandler={this.commentChangeHandler}
                  comments={this.state.comments}/>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  onSearchEntered = (value) =>{
    console.log('search value', value);
    let filteredData = this.state.data;
    filteredData = filteredData.filter((data) =>{
      let string = data.caption.text.toLowerCase();
      let subString = value.toLowerCase();
      return string.includes(subString);
    })
    this.setState({
      filteredData
    })
  }

  likeClickHandler = (id) =>{
    console.log('like id',id);
    var foundItem = this.state.data.find((item) => {
      return item.id === id;
    })

    if (typeof foundItem !== undefined) {
      if (!this.state.likeSet.has(id)) {
        foundItem.likes.count++;
        this.setState(({likeSet}) => ({
          likeSet:new Set(likeSet.add(id))
        }))
      }else {
        foundItem.likes.count--;
        this.setState(({likeSet}) =>{
          const newLike = new Set(likeSet);
          newLike.delete(id);

          return {
            likeSet:newLike
          };
        });
      }
    }
  }

  addCommentClickHandler = (id)=>{
    if (this.state.currentComment === "" || typeof this.state.currentComment === undefined) {
      return;
    }

    let commentList = this.state.comments.hasOwnProperty(id)?
      this.state.comments[id].concat(this.state.currentComment): [].concat(this.state.currentComment);

    this.setState({
      comments:{
        ...this.state.comments,
        [id]:commentList
      },
      currentComment:''
    })
  }


  commentChangeHandler = (e) => {
    this.setState({
      currentComment:e.target.value
    });
  }

  getUserInfo = () => {
    let that = this;
    let url = `${constants.userInfoUrl}/?access_token=${sessionStorage.getItem('access-token')}`;
    return fetch(url,{
      method:'GET',
    }).then((response) =>{
        return response.json();
    }).then((jsonResponse) =>{
      that.setState({
        userData:jsonResponse.data
      });
    }).catch((error) => {
      console.log('error user data',error);
    });
  }

  getMediaData = () => {
    let that = this;
    let url = `${constants.userMediaUrl}/?access_token=${sessionStorage.getItem('access-token')}`;
    return fetch(url,{
      method:'GET',
    }).then((response) =>{
        return response.json();
    }).then((jsonResponse) =>{
      that.setState({
        data:jsonResponse.data,
        filteredData:jsonResponse.data
      });
    }).catch((error) => {
      console.log('error user data',error);
    });
  }

  logout = () => {
    sessionStorage.clear();
    this.props.history.replace('/');
  }

  navigateToAccount = () =>{
    this.props.history.push('/profile');
  }
}

class HomeItem extends Component{
  constructor(){
    super();
    this.state = {
      isLiked : false,
      comment:'',
    }
  }

  render(){
    const {classes, item, comments} = this.props;

    let createdTime = new Date(0);
    createdTime.setUTCSeconds(item.created_time);
    let yyyy = createdTime.getFullYear();
    let mm = createdTime.getMonth() + 1;
    let dd = createdTime.getDate();

    let HH = createdTime.getHours();
    let MM = createdTime.getMinutes();
    let ss = createdTime.getSeconds();

    let time = dd+"/"+mm+"/"+yyyy+" "+HH+":"+MM+":"+ss;
    let hashTags = item.tags.map(hash =>{
      return "#"+hash;
    });
    return(
      <div className="home-item-main-container">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar alt="User Profile Pic" src={item.user.profile_picture} className={classes.avatar}/>
            }
            title={item.user.username}
            subheader={time}
          />
          <CardContent>
            <CardMedia
              className={classes.media}
              image={item.images.standard_resolution.url}
              title={item.caption.text}
            />
            <div  className={classes.hr}>
              <Typography component="p">
                {item.caption.text}
              </Typography>
              <Typography style={{color:'#4dabf5'}} component="p" >
                {hashTags.join(' ')}
              </Typography>
            </div>
          </CardContent>

            <CardActions>
              <IconButton aria-label="Add to favorites" onClick={this.onLikeClicked.bind(this,item.id)}>
                {this.state.isLiked && <FavoriteIconFill style={{color:'#F44336'}}/>}
                {!this.state.isLiked && <FavoriteIconBorder/>}
              </IconButton>
              <Typography component="p">
                {item.likes.count} Likes
              </Typography>
            </CardActions>

            <CardContent>
            {comments.hasOwnProperty(item.id) && comments[item.id].map((comment, index)=>{
              return(
                <div key={index} className="row">
                  <Typography component="p" style={{fontWeight:'bold'}}>
                    {sessionStorage.getItem('username')}:
                  </Typography>
                  <Typography component="p" >
                    {comment}
                  </Typography>
                </div>
              )
            })}
            <div className={classes.formControl}>
              <FormControl style={{flexGrow:1}}>
                <InputLabel htmlFor="comment">Add Comment</InputLabel>
                <Input id="comment" value={this.state.comment} onChange={this.commentChangeHandler}/>
              </FormControl>
              <FormControl>
                <Button onClick={this.onAddCommentClicked.bind(this,item.id)}
                   variant="contained" color="primary">
                  ADD
                </Button>
              </FormControl>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  onLikeClicked = (id) => {
    if (this.state.isLiked) {
      this.setState({
        isLiked:false
      });
    }else {
      this.setState({
        isLiked:true
      });
    }
    this.props.onLikedClicked(id)
  }

  commentChangeHandler = (e) => {
    this.setState({
      comment:e.target.value,
    });
    this.props.commentChangeHandler(e);
  }

  onAddCommentClicked = (id) => {
    if (this.state.comment === "" || typeof this.state.comment === undefined) {
      return;
    }
    this.setState({
      comment:""
    });
    this.props.onAddCommentClicked(id);
  }
}

export default withStyles(styles)(Home);
