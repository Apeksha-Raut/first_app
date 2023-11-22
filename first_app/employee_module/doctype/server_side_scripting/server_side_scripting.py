# Copyright (c) 2023, Apeksha and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class ServerSideScripting(Document):
	pass
	# Document Methods 
	# doc.insert() 

	# def validate(self):
	# 	self.mynew_doc()

	# def mynew_doc(self):
	# 	doc = frappe.new_doc('Client Side Scripting')
	# 	doc.first_name = 'Bally'
	# 	doc.age = 15
	# 	doc.insert()

	# some escape hatches that can be used to skip certain checks
	# doc.insert(
	#     ignore_permissions=True, # ignore write permissions during insert
	#     ignore_links=True, # ignore Link validation in the document
	#     ignore_if_duplicate=True, # dont insert if DuplicateEntryError is thrown
	#     ignore_mandatory=True # insert even if mandatory fields are not set
	# )

	
	# doc.save() 

	# def validate(self):
	# 	self.my_doc_save()

	# def my_doc_save(self):
	# 	doc = frappe.new_doc('Client Side Scripting')
	# 	doc.first_name = 'Jack'
	# 	doc.age = 20
	# 	doc.save()

	# 	doc.save(
	#     ignore_permissions=True, # ignore write permissions during insert
	#     ignore_version=True # do not create a version record
	# )# Document Methods 
	# doc.insert() 

	# def validate(self):
	# 	self.mynew_doc()

	# def mynew_doc(self):
	# 	doc = frappe.new_doc('Client Side Scripting')
	# 	doc.first_name = 'Bally'
	# 	doc.age = 15
	# 	doc.insert()

	# some escape hatches that can be used to skip certain checks
	# doc.insert(
	#     ignore_permissions=True, # ignore write permissions during insert
	#     ignore_links=True, # ignore Link validation in the document
	#     ignore_if_duplicate=True, # dont insert if DuplicateEntryError is thrown
	#     ignore_mandatory=True # insert even if mandatory fields are not set
	# )

	
	# doc.save() 

	# def validate(self):
	# 	self.my_doc_save()
	
	#doc.delete()
	# def validate(self):
	# 	self.mydoc_delete()

	# def mydoc_delete(self):
	# 	doc=frappe.get_doc('Client Side Scripting', 'PR-0014')
	# 	doc.delete()
    # OR
	# def mydoc_delete(self):
	# 	doc=frappe.delete_doc('Client Side Scripting', 'PR-0013')
		
    #doc.db.set()
	# def validate(self):
	# 	self.db_set_doc()

	# def db_set_doc(self):
	# 	doc=frappe.get_doc('Client Side Scripting','PR-0012')
	# 	doc.db_set('age', 45)

######################## Database API#########################

    # frappe.db.get_list(doctype, filters, or_filters, fields, order_by, group_by, start, page_length)

	# def validate(self):
	# 	self.get_list()

	# def get_list(self):
	# 	doc = frappe.db.get_list('Client Side Scripting',
	# 			filters={
	# 				'enable': 1
	# 			},
	# 			fields=['first_name', 'age']
	# 			)
	# 	for d in doc:
	# 		frappe.msgprint(_("The Parent First Name is {0} and age is {1}").format(d.first_name,d.age))


    # frappe.db.get_value(doctype, name, fieldname) or frappe.db.get_value(doctype, filters, fieldname)
    
	# def validate(self):
	# 	self.get_doc_value()

	# def get_doc_value(self):
	# 	first_name, last_name = frappe.db.get_value('Client Side Scripting', 'PR-0006', ['first_name', 'last_name'])
	# 	frappe.msgprint(_("The Parent Name is {0}  {1}").format(first_name,last_name))

	 #frappe.db.set_value(doctype, name, fieldname, value)

	# def validate(self):
	# 	self.set_doc_value()

	# def set_doc_value(self):
	# 	frappe.db.set_value('Client Side Scripting','PR-0006','age',25)

	#frappe.db.exists(doctype, name)

	# def validate(self):
	# 	if frappe.db.exists('Client Side Scripting','PR-0007'):
	# 		frappe.msgprint(_("The Document is Exists in Database. "))
	# 	else:
	# 		frappe.msgprint(_("The Document does not Exists in Database. "))


	#frappe.db.count(doctype, filters)

	# def validate(self):
	# 	doc_count = frappe.db.count('Client Side Scripting', {'enable': 1}) # True
	# 	frappe.msgprint(_("The Enable Document Count is {0}").format(doc_count))

   

	# create a new doument using new_doc()  

	# def validate(self):
	# 	self.mynew_doc()

	# def mynew_doc(self):
	# 	doc = frappe.new_doc('Client Side Scripting')
	# 	doc.first_name = 'Madhu'
	# 	doc.last_name = 'Paul'
	# 	doc.age = 13
	# 	doc.append("family_members",{   "name1":"Jain",
	#  									"relation":"Sister",
	#  									"age":14
	# 								})                                                                                                                                                                                                                     
	# 	doc.insert()

	####### frappe.delete_doc(doctype, name)#######
    # frappe.delete_doc(doctype, name)

	# def validate(self):
	#  	frappe.delete_doc('Client Side Scripting', 'PR-0009')


   

	############ frappe.get_doc(doctype,name) ############
	#  Returns a Document object of the record identified by doctype and name using get

	# def validate(self):
	# 	self.get_document()

	# def get_document(self):
	# 	doc = frappe.get_doc('Client Side Scripting', self.client_side_doc)
	# 	frappe.msgprint(_("The First Name is {0} and Age is {1}").format(doc.first_name,doc.age))

	# 	for row in doc.get("family_members"):
	# 		frappe.msgprint(_(
	# 			"{0}. The family member name is '{1}' and relation is '{2}'").format(
	# 			row.idx,row.name1,row.relation))


	######################## Value Fetching ##################
	# def validate(self):
	# 	frappe.msgprint(_("Hello My full name is '{0}' ").format(
	# 		self.first_name +" "+ self.middle_name+" "+self.last_name))

	# def validate(self):			
	# 	for row in self.get("family_members"):
	# 		frappe.msgprint(_(
	# 			"{0}. The family member name is '{1}' and relation is '{2}'").format(
	# 			row.idx,row.name1,row.relation))

	######################## Document Events ##################

	# def validate(self):
	# 	frappe.msgprint("Hello Frappe")

	# def before_save(self):
	#  	frappe.throw("Hello Frappe from 'before_save' Event ")
	
	# def before_insert(self):
	# 	frappe.throw("Hello Frappe from 'before_insert' Event ")
		
		
	# def after_insert(self):
	# 	frappe.throw("Hello Frappe from 'after_insert' Event ")

	# def on_update(self):
	# 	frappe.msgprint("Hello Frappe from 'on_update' Event ")

	# def before_submit(self):
	# 	frappe.msgprint("Hello Frappe from 'before_submit' Event ")

	# def on_submit(self):
	# 	frappe.msgprint("Hello Frappe from 'on_submit' Event ")

	# def after_submit(self):
	# 	frappe.msgprint("Hello Frappe from 'after_submit' Event ")

	# def on_cancel(self):
	#  	frappe.msgprint("Hello Frappe from 'on_cancel' Event ")

	# def on_trash(self):
	# 	frappe.msgprint("Hello Frappe from 'on_trash' Event ")
	
	# def after_delete(self):
	# 	frappe.msgprint("Hello Frappe from 'after_delete' Event ")
	
	

