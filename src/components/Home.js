import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from 'models/makeStyles';
import Link from './Link';

const backgroundImage = '/images/bg.png';
const useStyles = makeStyles()((theme) => ({
  pageContainer: {
    background: `center / cover no-repeat url(${backgroundImage})`,
    backgroundPosition: 'inherit',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
    },
  },
  contentContainer: {
    color: 'white',
    lineHeight: '140%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      boxSizing: 'border-box',
    },
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: theme.spacing(4.75),
    letterSpacing: '0.04em',
    textAlign: 'left',
    textTransform: 'none',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4, 6),
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '0.02em',
      padding: theme.spacing(3.5, 4.25),
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <Box
      className={classes.pageContainer}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
      }}
    >
      <Box
        sx={{
          width: (t) => [t.spacing(83), t.spacing(128)],
          mt: [-71, 30],
        }}
        className={classes.contentContainer}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>

        <Typography
          variant="h3"
          sx={{
            fontSize: [16, 20],
            fontWeight: 700,
            lineHeight: (t) => [t.spacing(6.4), t.spacing(7)],
          }}
        >
          Welcome to TreeTracker
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: [32, 48],
            fontWeight: [600, 700],
            lineHeight: (t) => [t.spacing(11.2), t.spacing(16.8)],
            letterSpacing: 0,
          }}
        >
          Come explore the global reforestation effort.
        </Typography>
        <Box
          className={classes.buttonsContainer}
          sx={{
            mt: (t) => [t.spacing(6.5), t.spacing(10)],
          }}
        >
          <Button variant="outlined" color="inherit" className={classes.button}>
            Learn more
          </Button>
          <Link href="/top">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              sx={{
                color: '#474B4F',
                ml: [4, 6],
              }}
            >
              Let&apos;s Find a Tree
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
