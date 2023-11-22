// Copyright (c) 2023, Apeksha and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {

	// 	//frappe.msgprint("Hello, Welcome to Frappe")
	// 	frappe.throw("This is an Error")
	// }

	// onload: function(frm) {

	// 	frappe.msgprint("Hello, onload event")
		
	// }

	// validate: function(frm) {

	// 	//frappe.msgprint("Hello, Welcome to Frappe")
	// 	frappe.throw("This is validate event")
	// }

	// before_save: function(frm){
	// 	frappe.throw("This is before_save event")
	// }


	// after_save: function(frm){
	// 	frappe.throw("This is after_save event")
	// }


});
   /////////////////////////Child Table Events////////////////////////////////

// frappe.ui.form.on('Family Members', {
// 	 // cdt is Child DocType name i.e Family Members
// 	 // cdn is the row name
	
// 		// name1: function(frm) {

// 		// 	frappe.msgprint("Hello D-codE from Child DocType 'name1' event")
// 		// }
	
// 	age:function(frm, cdt, cdn) {
			
// 		frappe.msgprint("Hello D-codE from 'age' Child DocType fieldname event")
// 	}
// })

// frappe.ui.form.on('Client Side Scripting', {

// /*********************************value fetching (display)********************************/

// 	after_save:function(frm){

// 		frappe.msgprint(__("The full name is '{0}'",
// 				[frm.doc.first_name +" "+ frm.doc.middle_name+" "+frm.doc.last_name]))
	
// 		for (let row of frm.doc.family_members) {
// 			frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}'and age is {3}", 
// 				[row.idx,row.name1,row.relation,row.age]))
// 		}			
// 	}
// }); 


// frappe.ui.form.on('Client Side Scripting', {

// 	/*********************************set_intro & is_new********************************/
	
// 	refresh: function(frm){

// 		// frm.set_intro("Now you can create a new Client Side Scripting doctype")

// 		if(frm.is_new()){
// 			frm.set_intro("Now you can create a new Client Side Scripting doctype")
// 		}

// 	}
		
// });

// frappe.ui.form.on('Client Side Scripting',{

// 	/*************************frm.set_value****************************/

// 	validate: function(frm){
		
// 		//frm.set_value('full_name',frm.doc.first_name +" "+ frm.doc.middle_name+" "+frm.doc.last_name)


// 	let row = frm.add_child('family_members',{
// 			name1:'Rahul Sharma',
// 			relation: 'Father',
// 			age:56,
// 		})
// 	}
// });

// frappe.ui.form.on('Client Side Scripting',{


// 	enable:function(frm){

// 			// frm.set_df_property('first_name','reqd',1)
// 			// //frm.refresh_field('first_name');

// 			// frm.set_df_property('middle_name','read_only',1)
// 			// frm.refresh_field('middle_name');
			
// 			frm.toggle_reqd('age',true)

// 	}


// });

frappe.ui.form.on('Client Side Scripting',{

	refresh: function(frm){

		// frm.add_custom_button('Click me',()=>{

		// 	frappe.msgprint(__('You Clicked me!'));
		// 	//frappe.msgprint(__('You Clicked Me!!'));
		// })

		frm.add_custom_button('Click Me1',() =>{
		
			frappe.msgprint(__('You Clicked 1 !!'));
		},'click me')


		frm.add_custom_button('Click Me2',() =>{
		
			frappe.msgprint(__('You Clicked 2 !!'));
		},'click me')

	}
})