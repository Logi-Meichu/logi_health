import * as React from "react";
import * as PropTypes from "prop-types";
import { StyleSheet } from "./StyleSheet";
// import {IconButton,Tooltip ,Tabs,  Tab,Icon  }from "react-uwp";
import Tabs, { Tab } from "react-uwp/Tabs";
import Icon from "react-uwp/Icon";
// import * as ReactDOM from "react-dom";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import MyComponent from "./MyComponent";

export default class App extends React.Component {
    static contextTypes = { theme: PropTypes.object };
  render() {
    
    return (
      <div style={styles.edge_container} className="bg">
              <div style={styles.Frostedglass} >

      <UWPThemeProvider
            theme={getTheme({
              themeName: "dark", // set custom theme
              accent: "#0078D7", // set accent color
              useFluentDesign: true, // sure you want use new fluent design.
              desktopBackgroundImage: "./bg.svg" // set global desktop background image
            })}
          >
        <div style={styles.head_container}>

    

            <h1>hahaahah</h1>
            <MyComponent />
            <MyComponent />
            <MyComponent />
           
          {/* </UWPThemeProvider> */}
          
        </div>

        <div style={styles.body_container}>

          {/* <h1>hahaahah</h1> */}
          <div style={styles.body_container}>
        <Tabs style={styles.baseStyle}>
          <Tab>
            Tab1
          </Tab>

          <Tab>
            Tab2
          </Tab>

          <Tab>
            Tab3
          </Tab>

          <Tab title="Custom TabTile">
            Custom TabTile
          </Tab>
        </Tabs>

        <Tabs
          tabStyle={styles.tabStyle}
          style={styles.baseStyle}
          tabTitleStyle={{ paddingRight: 30 }}
          renderTitle={title => (
            <span>
              <Icon>
                {title}
              </Icon>
              <span style={{ marginLeft: 12 }}>{title}</span>
            </span>
          )}
        >
          <Tab title="People">
            People
          </Tab>

          <Tab title="NUIFace">
            NUIFace
          </Tab>

          <Tab title="Game">
            Game
          </Tab>

          <Tab title="Color">
            Color
          </Tab>
        </Tabs>
      </div>
            

        </div>

       
      </UWPThemeProvider>
      </div>

      </div>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',

  },
  head_container: {
    flex: 1,
    backgroundColor: "#A005",

  },

  body_container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: "#0A05",

  },
  dark: {
    backgroundColor: "#000",
    flex: 1,
    height: '100vh',
    width: '100vw',
  },
  edge_container: {
    flex: 1,
    // flexDirection: 'row',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: 'white',
    height: '100vh',
    width: '100vw',

  },
  Frostedglass: {
    flex: 1,
    // flexDirection: 'row',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    background: 'hsla(0,0%,100%,.3)',
    // boder:4,
    // backgroundColor: 'white',
    margin: "calc(100vh * 0.05) calc(100vw * 0.05)",
  },
   baseStyle: {
    // display: "block",
    flexDirection: 'column',
    margin: "10px 0",
    height: 400
  },
   tabStyle: {
     flex:1,
     marginRight: 20
        //  backgroundColor: 'white',

    // background: theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow
  },
});