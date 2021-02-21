# language_selector
Just a language Selector which shows language and button colour on the basis of selected country flags

### There are two methods of passing data into context object-
1. using Default value
2. using ContextName.Provider

### There are also two methods of getting data out of context object - 

1. using this.context
  (i). First make a const contextType = ContextName(from your context directory)
  (ii).Then use {this.context} to get the value out of context object
  
2. using ContextName.Consumer 
  (i) this will return a child which is a function that will called automatically in some point in time in future
  (ii)this is also used in case we have multiple context objects

TIP : We cannot use this.context if we have multiple objects 
