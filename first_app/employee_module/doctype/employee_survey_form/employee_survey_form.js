// Copyright (c) 2023, Apeksha and contributors
// For license information, please see license.txt

// Employee Details Shared
frappe.ui.form.on('Employee Survey Form', {
    
    refresh: function(frm) {
        frm.fields_dict['employee_details'].$input.on('change', function() {
            var selected_value = frm.doc.employee_details;

            // Change hidden property of fields based on the selected dropdown value
			if(selected_value==='Yes'){
				frm.toggle_display(['ecode', 'ename','emp_desig','emp_branch','emp_division', 'emp_region'], false);
			}
			else if(selected_value==='No'){
				frm.toggle_display(['ecode', 'ename','emp_desig','emp_branch','emp_division', 'emp_region'], true);
			}
			else{
				frm.toggle_display(['ecode', 'ename','emp_desig','emp_branch','emp_division', 'emp_region'], true);
			}
            
        });
		frm.refresh_field('employee_details');
    }
});


//Question 1
//Set value from check field to select field(hidden)
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q1_radio_field_1', 'q1_radio_field_2', 'q1_radio_field_3', 'q1_radio_field_4', 'q1_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q1_radio_field_1: function(frm)
	{
		frm.set_value("ans_1","agree")
	},
	q1_radio_field_2: function(frm)
	{
		frm.set_value("ans_1","somewhat agree")
	},
	q1_radio_field_3: function(frm)
	{
		frm.set_value("ans_1","neutral")
	},
	q1_radio_field_4: function(frm)
	{
		frm.set_value("ans_1","somewhat disagree")
	},
	q1_radio_field_5: function(frm)
	{
		frm.set_value("ans_1","disagree")
	}

});




//Question 2
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q2_radio_field_1', 'q2_radio_field_2', 'q2_radio_field_3', 'q2_radio_field_4', 'q2_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q2_radio_field_1: function(frm)
	{
		frm.set_value("ans_2","agree")
	},
	q2_radio_field_2: function(frm)
	{
		frm.set_value("ans_2","somewhat agree")
	},
	q2_radio_field_3: function(frm)
	{
		frm.set_value("ans_2","neutral")
	},
	q2_radio_field_4: function(frm)
	{
		frm.set_value("ans_2","somewhat disagree")
	},
	q2_radio_field_5: function(frm)
	{
		frm.set_value("ans_2","disagree")
	}

});

//Question 3
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q3_radio_field_1', 'q3_radio_field_2', 'q3_radio_field_3', 'q3_radio_field_4', 'q3_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q3_radio_field_1: function(frm)
	{
		frm.set_value("ans_3","agree")
	},
	q3_radio_field_2: function(frm)
	{
		frm.set_value("ans_3","somewhat agree")
	},
	q3_radio_field_3: function(frm)
	{
		frm.set_value("ans_3","neutral")
	},
	q3_radio_field_4: function(frm)
	{
		frm.set_value("ans_3","somewhat disagree")
	},
	q3_radio_field_5: function(frm)
	{
		frm.set_value("ans_3","disagree")
	}

});

//Question 4
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q4_radio_field_1', 'q4_radio_field_2', 'q4_radio_field_3', 'q4_radio_field_4', 'q4_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q4_radio_field_1: function(frm)
	{
		frm.set_value("ans_4","agree")
	},
	q4_radio_field_2: function(frm)
	{
		frm.set_value("ans_4","somewhat agree")
	},
	q4_radio_field_3: function(frm)
	{
		frm.set_value("ans_4","neutral")
	},
	q4_radio_field_4: function(frm)
	{
		frm.set_value("ans_4","somewhat disagree")
	},
	q4_radio_field_5: function(frm)
	{
		frm.set_value("ans_4","disagree")
	}

});

//Question 5
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q5_radio_field_1', 'q5_radio_field_2', 'q5_radio_field_3', 'q5_radio_field_4', 'q5_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q5_radio_field_1: function(frm)
	{
		frm.set_value("ans_5","agree")
	},
	q5_radio_field_2: function(frm)
	{
		frm.set_value("ans_5","somewhat agree")
	},
	q5_radio_field_3: function(frm)
	{
		frm.set_value("ans_5","neutral")
	},
	q5_radio_field_4: function(frm)
	{
		frm.set_value("ans_5","somewhat disagree")
	},
	q5_radio_field_5: function(frm)
	{
		frm.set_value("ans_5","disagree")
	}

});

//Question 6
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q6_radio_field_1', 'q6_radio_field_2', 'q6_radio_field_3', 'q6_radio_field_4', 'q6_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q6_radio_field_1: function(frm)
	{
		frm.set_value("ans_6","agree")
	},
	q6_radio_field_2: function(frm)
	{
		frm.set_value("ans_6","somewhat agree")
	},
	q6_radio_field_3: function(frm)
	{
		frm.set_value("ans_6","neutral")
	},
	q6_radio_field_4: function(frm)
	{
		frm.set_value("ans_6","somewhat disagree")
	},
	q6_radio_field_5: function(frm)
	{
		frm.set_value("ans_6","disagree")
	}

});

//Question 7
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q6_radio_field_1', 'q6_radio_field_2', 'q6_radio_field_3', 'q6_radio_field_4', 'q6_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q6_radio_field_1: function(frm)
	{
		frm.set_value("ans_6","agree")
	},
	q6_radio_field_2: function(frm)
	{
		frm.set_value("ans_6","somewhat agree")
	},
	q6_radio_field_3: function(frm)
	{
		frm.set_value("ans_6","neutral")
	},
	q6_radio_field_4: function(frm)
	{
		frm.set_value("ans_6","somewhat disagree")
	},
	q6_radio_field_5: function(frm)
	{
		frm.set_value("ans_6","disagree")
	}

});

//Question 7
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q7_radio_field_1', 'q7_radio_field_2', 'q7_radio_field_3', 'q7_radio_field_4', 'q7_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q7_radio_field_1: function(frm)
	{
		frm.set_value("ans_7","agree")
	},
	q7_radio_field_2: function(frm)
	{
		frm.set_value("ans_7","somewhat agree")
	},
	q7_radio_field_3: function(frm)
	{
		frm.set_value("ans_7","neutral")
	},
	q7_radio_field_4: function(frm)
	{
		frm.set_value("ans_7","somewhat disagree")
	},
	q7_radio_field_5: function(frm)
	{
		frm.set_value("ans_7","disagree")
	}

});

//Question 8
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q8_radio_field_1', 'q8_radio_field_2', 'q8_radio_field_3', 'q8_radio_field_4', 'q8_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q8_radio_field_1: function(frm)
	{
		frm.set_value("ans_8","agree")
	},
	q8_radio_field_2: function(frm)
	{
		frm.set_value("ans_8","somewhat agree")
	},
	q8_radio_field_3: function(frm)
	{
		frm.set_value("ans_8","neutral")
	},
	q8_radio_field_4: function(frm)
	{
		frm.set_value("ans_8","somewhat disagree")
	},
	q8_radio_field_5: function(frm)
	{
		frm.set_value("ans_8","disagree")
	}

});

//Question 9
frappe.ui.form.on('Employee Survey Form', {
	refresh: function(frm) {
        var radioFieldNames = ['q9_radio_field_1', 'q9_radio_field_2', 'q9_radio_field_3', 'q9_radio_field_4', 'q9_radio_field_5'];

        radioFieldNames.forEach(function(fieldName) {
            frm.fields_dict[fieldName].$input.on('change', function() {
                // Uncheck other checkboxes in the group
                radioFieldNames.forEach(function(otherFieldName) {
                    if (otherFieldName !== fieldName) {
                        frm.doc[otherFieldName] = 0;
                    }
                });
                frm.refresh_fields();
            });
        });
    },
	q9_radio_field_1: function(frm)
	{
		frm.set_value("ans_9","agree")
	},
	q9_radio_field_2: function(frm)
	{
		frm.set_value("ans_9","somewhat agree")
	},
	q9_radio_field_3: function(frm)
	{
		frm.set_value("ans_9","neutral")
	},
	q9_radio_field_4: function(frm)
	{
		frm.set_value("ans_9","somewhat disagree")
	},
	q9_radio_field_5: function(frm)
	{
		frm.set_value("ans_9","disagree")
	}

});


//Validation for mandatory questions
frappe.ui.form.on('Employee Survey Form', {
    validate: function(frm) {
        var questions = ['q1', 'q2', 'q3', 'q4', 'q5','q6','q7','q8','q9']; // Replace with the question prefixes

        var isValid = true;

        questions.forEach(function(question) {
            var isChecked = false;
            for (var i = 1; i <= 9; i++) {
                var fieldName = question + '_radio_field_' + i;
                if (frm.doc[fieldName] === 1) {
                    isChecked = true;
                    break;
                }
            }

            if (!isChecked) {
                frappe.msgprint(__('Please select at least one option for Question ' + question.substring(1))); // Show error message
                isValid = false;
                return false; // Break the loop
            }
        });

        if (!isValid) {
            frappe.validated = false; // Prevent form submission
        }
    }
});
