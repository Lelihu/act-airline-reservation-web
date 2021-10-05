import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
export default function Contacts() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <img alt="" src={img2} />
        </ListItemAvatar>
        <ListItemText
          primary="ABEBE KEBEDE"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                General Manager<br/>
                  Mobile - +251911111111 <br/>
                  Email - abaebe@act.com
              </Typography>
              {"------------------------ "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img alt="" src={img1} />
        </ListItemAvatar>
        <ListItemText
          primary="HARON SISAY"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                  Customer Services Head<br/>
                  Mobile - +251911222222 <br/>
                  Email - haron@act.com
              </Typography>
              {"------------------------"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <img alt="" src={img3} />
        </ListItemAvatar>
        <ListItemText
          primary="HANA KEBEDE"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                  Finance Head<br/>
                  Mobile - +251911333333 <br/>
                  Email - hana@act.com
              </Typography>
              {"------------------------"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
