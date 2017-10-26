// import React, { Component } from 'react';
// import { Text, View, StyleSheet, ScrollView, TextInput , Picker, Modal} from 'react-native';
// import { Constants } from 'expo';


// import CustomInput from './components/CustomInput';
// import RadioButton from './components/RadioButton';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // 0.17.0

// export default class App extends Component {
//   state = {user: 'text', isOpen: false};
//   isOpen = false;
//   updateUser = (user) => {
//       this.setState({ user: user, isOpen: !this.state.isOpen
//       })
//   };
   
//   openSuffix = () => {
//     this.setState({ isOpen: !this.state.isOpen, user: this.state.user})
//   }
//   render() {
//     return (
      
//       <ScrollView style={styles.container}>
//         <View>
//             <CustomInput label="First Name" placeholder="first name" isRequired="true" />
//             <CustomInput label="Last Name" placeholder="Last name" isRequired="true" />
            
//           </View>
          
//           <View  style={styles.selectField}>
//             <Text style = {styles.label}> Select Suffix :</Text>
//             <Text style = {styles.label} onPress={this.openSuffix }>{this.state.user}</Text>
//             <Modal animationType="slide" visible={this.state.isOpen}>
//               <Picker style={!this.state.isOpen ? styles.hide: styles.showPicker } selectedValue = {this.state.user} onValueChange = {this.updateUser}>
//                 <Picker.Item label = "Steve" value = "steve" />
//                 <Picker.Item label = "Ellen" value = "ellen" />
//                 <Picker.Item label = "Maria" value = "maria" />
//               </Picker>
//             </Modal>
            
//         </View>
        
//         <View>
//           <CustomInput label="First" placeholder="first name" isRequired="true" />
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   hide: {
//     display: 'none'
//   },
//   selectField: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   },
//   showPicker: {
//     marginTop: '-100px'
//   },
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//     margin: '30px',
//     padding: '30px'
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
//   labelHead: {
//     fontWeight: 'bold',
//     marginRight: '10px'
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ddddd',
//     borderBottomWidth: 1  
  
//   },
//   formView : {
//     margin: 30
//   },
//   label: {
//     marginBottom: '-10px',
//     fontSize: '18px'
//   }
// });

import React from 'react';
import { StyleSheet, Text, View, ScrollView , Picker, Modal, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.15
import CustomInput from './components/CustomInput';

class HomeScreen extends React.Component {
  state = {user: 'text', isOpen: false};
  isOpen = false;
  updateUser = (user) => {
      this.setState({ user: user, isOpen: !this.state.isOpen
      })
  };
   
  openSuffix = () => {
    this.setState({ isOpen: !this.state.isOpen, user: this.state.user})
  }
  static navigationOptions = {
    title: 'Welcome'
  };
  
  
  render() {
    const { navigate } = this.props.navigation;
    return ( <ScrollView style={styles.container}>
        <View>
            <CustomInput label="First Name" placeholder="first name" isRequired="true" />
            <CustomInput label="Last Name" placeholder="Last name" isRequired="true" />
            
          </View>
          
          <View  style={styles.selectField}>
            <Text style = {styles.label}> Select Suffix :</Text>
            <Text style = {styles.label} onPress={this.openSuffix }>{this.state.user}</Text>
            <Modal animationType="slide" visible={this.state.isOpen}>
              <Picker style={!this.state.isOpen ? styles.hide: styles.showPicker } selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "Steve" value = "steve" />
                <Picker.Item label = "Ellen" value = "ellen" />
                <Picker.Item label = "Maria" value = "maria" />
              </Picker>
            </Modal>
            
        </View>
        
        <View>
          <CustomInput label="First" placeholder="first name" isRequired="true" />
        </View>
        
        <Button
          onPress={() => navigate('Next')}
          title="Chat with Lucy"
        />
        
      </ScrollView>);
  }
}

class NextScreen extends React.Component {
  static navigationOptions = {
    title: 'Next Screen',
  };
  render() {
    return (
      <View>
        <Text>New Screen here</Text>
        <View>
          <CustomInput label="Financial" placeholder="Salary" isRequired="true" />
        </View>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Next: { screen: NextScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  
  hide: {
    display: 'none'
  },
  selectField: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  showPicker: {
    marginTop: '-100px'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },
  label: {
    marginBottom: '-10px',
    fontSize: '18px'
  }
});
