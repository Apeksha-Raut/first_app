# /home/apeksha/frappe-bench/apps/first_app/first_app/employee_module/doctype/ta/ta.py

import frappe
from frappe.model.document import Document

class TA(Document):
       pass

def get_context(context):
        # Other context data
        context.update({
            "include_html": ["/home/apeksha/frappe-bench/apps/first_app/first_app/templates/travel_allowance.html"],
            "include_js": ["/home/apeksha/frappe-bench/apps/first_app/first_app/employee_module/doctype/ta/ta.js"]
        })
        return context

@frappe.whitelist()
def server_operation(msg):
    value = msg
    frappe.msgprint(value)
    return False
