import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Rules = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Rules expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>ACT_ARS_FLIGHT_RULE_1 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The ACT AIRLINE RESERVATIONS SYSTEM provides convenient environment for the customers to book the flights as when and where they require.<br/>
            After searching, the system display list of available flights and allows customer to choose a particular flight. Then the system checks for <br/>
            the availability of seats on the flight. If the seats are available then the system allows the passenger to book a seat.
          </Typography>
        </AccordionDetails>
      </Rules>
      <Rules expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>ACT_ARS_FLIGHT_RULE_2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To book a flight the system asks the customer to register in to the system by entering his details such as name, address, city, state, credit card number and <br/>
            contact information. Then it checks the validity of card and book the flight and update the airline database. The system also allows the customer to cancel <br/>
            his/her reservation, if any problem occurs.
          </Typography>
        </AccordionDetails>
      </Rules>
      <Rules expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>ACT_ARS_FLIGHT_RULE_3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            the system shall require a user to register, in order to carry out any transactions with it except for checking the availability of tickets. It will ask the <br/>
            user for the following information or data – a user id (auto), a password, first name, middle name, last name, address, phone number, gender, age, credit card number, <br/>
            city, country, email
          </Typography>
        </AccordionDetails>
      </Rules>

      <Rules expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>ACT_ARS_FLIGHT_RULE_4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In case the user buys the ticket, the system accesses his profile and charges the price of the ticket to his credit card number. if a user cancels the ticket, 	the system updates <br/>
            the database by incrementing the number of available seats and credits the refund amount to the customer's credit card number
          </Typography>
        </AccordionDetails>
      </Rules>

      <Rules expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>ACT_ARS_FLIGHT_RULE_5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            a new user would have to register himself with the system by providing personal information, in order to reserve seat. Un registered users have the privilege to checking <br/>
            the availability of tickets
          </Typography>
        </AccordionDetails>
      </Rules>
    </div>
  );
}
