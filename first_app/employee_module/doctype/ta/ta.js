// Copyright (c) 2023, Apeksha and contributors
// For license information, please see license.txt

var latitude1, longitude1; // Declare variables in a higher scope
//sahayog_asset.sahayog_asset.doctype.asset_request.asset_request.set_level
frappe.ui.form.on("TA", {
  server_button: function (frm) {
    frappe.call({
      method: "first_app.employee_module.doctype.ta.ta.server_operation",
      args: {
        msg: "Hello from client",
      },
      callback: function (r) {
        if (r.message === true) {
          console.log("Client-Server interaction successful!!");
        } else {
          console.log("Client-Server interaction Failure !!");
        }
        // additional code snippet
      },
    });
  },
});

// frappe.ui.form.on("TA", {
//   refresh: function (frm) {
//     // Add a click event handler for the HTML button
//     frm.fields_dict["ta_form"].$wrapper
//       .find("#btnSource")
//       .on("click", function () {
//         // Trigger the click event of the second button field
//         frm.fields_dict["your_location_start"].$input.trigger("click");
//       });
//   },
// });

// frappe.ui.form.on("TA", {
//   refresh: function (frm) {
//     // Add a click event handler for the HTML button
//     frm.fields_dict["ta_form"].$wrapper
//       .find("#btnDestination")
//       .on("click", function () {
//         // Trigger the click event of the second button field
//         frm.fields_dict["your_location_end"].$input.trigger("click");
//       });
//   },
// });
// frappe.ui.form.on("TA", {
//   refresh: function (frm) {
//     // Add custom script for your form
//     document.getElementById("btnSource").addEventListener("click", function () {
//       // Call the toggleSource function when the button is clicked
//       toggleSource(frm);
//     });

//     document
//       .getElementById("btnDestination")
//       .addEventListener("click", function () {
//         // Call the toggleDestination function when the button is clicked
//         toggleDestination(frm);
//       });
//   },
// });

// frappe.ui.form.on("TA", {
//   refresh: function (frm) {
//     // Add a custom button to recalculate and update the total
//     // frm.add_custom_button(__('Update Total'), function() {
//     //     calculateAndUpdateTotal(frm);
//     // });
//     // function calculateAndUpdateTotal(frm) {
//     var total = 0;
//     $.each(frm.doc.travel_allowance_sheet || [], function (i, row) {
//       total += row.fare_amount; // replace with your actual field names
//       // frm.set_value("total_fare_amount", total.toFixed(2));
//     });

//     frm.set_value("total_amount", total.toFixed(2)); // replace with your actual field name for the total

//     // Update the total in the server-side child table rows
//     frm.doc.travel_allowance_sheet.forEach(function (row) {
//       frappe.model.set_value(row.doctype, row.name, "total_amount", total);
//     });

//     // Save the document to persist the changes
//     frm.save();
//     // }
//   },
// });

// frappe.ui.form.on("TA", {
//   refresh: function (frm) {
//     // Add a custom button to recalculate and update the total
//     // frm.add_custom_button(__('Update Total'), function() {
//     //     calculateAndUpdateTotal(frm);
//     // });
//     // function calculateAndUpdateTotal(frm) {
//     var totalKm = 0;
//     $.each(frm.doc.travel_allowance_sheet || [], function (i, row) {
//       totalKm += row.distance_in_kilometer; // replace with your actual field names
//       // frm.set_value("total_fare_amount", total.toFixed(2));
//     });

//     frm.set_value("total_kilometers", totalKm.toFixed(2)); // replace with your actual field name for the total
//     // Update the total in the server-side child table rows
//     frm.doc.travel_allowance_sheet.forEach(function (row) {
//       frappe.model.set_value(
//         row.doctype,
//         row.name,
//         "total_kilometers",
//         totalKm
//       );
//     });

//     // Save the document to persist the changes
//     frm.save();
//     // }
//   },
// });

/* Submitting data in child table */
frappe.ui.form.on("TA", {
  submit_data: function (frm) {
    let fromLocation = frm.doc.from;
    let taTimeStart = frm.doc.time_start;
    let toLocation = frm.doc.to;
    let taTimeReach = frm.doc.time_reach;
    let taDate = frm.doc.currentdate;
    let taPurpose = frm.doc.purpose;
    let taModeOfTransport = frm.doc.mode_of_transport;
    let taDistanceInKilometer = frm.doc.distance_in_kilometer;
    let taFareAmount = frm.doc.fare_amount;

    console.log("From", fromLocation);
    console.log("to", toLocation);

    if (!fromLocation) {
      frappe.throw("Please Fill your Source Location");
    } else if (!toLocation) {
      frappe.throw("Please Fill your Destination Location");
    } else if (!taPurpose) {
      frappe.throw("Please Fill your Reason of travelling");
    } else if (!taModeOfTransport) {
      frappe.throw("Please Select your Travelling Mode");
    } else {
      let row = frm.add_child("travel_allowance_sheet", {
        date: taDate,
        from: fromLocation,
        time_start: taTimeStart,
        to: toLocation,
        time_reach: taTimeReach,
        purpose: taPurpose,
        mode_of_transport: taModeOfTransport,
        distance_in_kilometer: taDistanceInKilometer,
        fare_amount: taFareAmount,
      });

      // var totalFareAmount = frm.doc.total_amount;
      // let row1 = frm.add_child("travel_allowance_sheet", {
      //   total: totalFareAmount,
      // });

      frm.refresh_field("travel_allowance_sheet");

      frm.save();
      frm.set_value("from", null);
      frm.set_value("to", null);
      frm.set_value("time_start", null);
      frm.set_value("time_reach", null);
      frm.set_value("distance_in_kilometer", null);
      frm.set_value("purpose", null);
      frm.set_value("mode_of_transport", null);
      frm.set_value("fare_amount", null);
    }

    var total = 0;
    $.each(frm.doc.travel_allowance_sheet || [], function (i, row) {
      total += row.fare_amount; // replace with your actual field names
      // frm.set_value("total_fare_amount", total.toFixed(2));
    });

    frm.set_value("total_amount", total.toFixed(2));

    // // Update the total in the server-side child table rows
    // frm.doc.travel_allowance_sheet.forEach(function (row) {
    //   frappe.model.set_value(row.doctype, row.name, "total_amount", total);
    // });

    // // Save the document to persist the changes
    // frm.save();

    var totalKm = 0;
    $.each(frm.doc.travel_allowance_sheet || [], function (i, row) {
      totalKm += row.distance_in_kilometer; // replace with your actual field names
      // frm.set_value("total_fare_amount", total.toFixed(2));
    });

    frm.set_value("total_kilometers", totalKm.toFixed(2));

    // Update the total in the server-side child table rows
    // frm.doc.travel_allowance_sheet.forEach(function (row) {
    //   frappe.model.set_value(
    //     row.doctype,
    //     row.name,
    //     "total_kilometers",
    //     totalKm
    //   );
    // });

    // // Save the document to persist the changes
    // frm.save();
  },

  your_location_start: function (frm) {
    if (!frm.doc.from) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (startPosition) {
            var latitude1 = startPosition.coords.latitude;
            var longitude1 = startPosition.coords.longitude;

            frappe.call({
              type: "GET",
              url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude1}&lon=${longitude1}`,
              callback: function (r) {
                var address = r.display_name;
                frm.set_value("from", address);
                frm.set_value("from_latitude", latitude1);
                frm.set_value("from_longitude", longitude1);
                frm.set_value("status", "In-Progress");

                // Fetch the current date and time
                var currentDate = frappe.datetime.now_date();
                frm.set_value("currentdate", currentDate);

                var currentTime = frappe.datetime.now_time();
                frm.set_value("time_start", currentTime);
                frm.save(); // Save the form after setting values
              },
              error: function (err) {
                console.error("Error getting location:", err);
                frappe.msgprint(
                  __("Error getting location. Please try again later.")
                );
              },
            });
          },
          function (error) {
            console.error("Error getting geolocation:", error);
            frappe.msgprint(
              __(
                "Error getting geolocation. Please check your browser settings."
              )
            );
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        frappe.msgprint(__("Geolocation is not supported by this browser."));
      }
    } else {
      frappe.msgprint("You have already selected source location");
    }
  },

  your_location_end: function (frm) {
    if (!frm.doc.from) {
      frappe.msgprint(__("Please Select Source Location First."));
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (endPosition) {
          var latitude2 = 21.145800896015732;
          var longitude2 = 79.08806322375538;
          // console.log(latitude2, longitude2);

          frappe.call({
            type: "GET",
            url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude2}&lon=${longitude2}`,
            callback: function (r) {
              var address = r.display_name;
              frm.set_value("to", address);
              frm.set_value("to_latitude", latitude2);
              frm.set_value("to_longitude", longitude2);

              var currentDateTime = frappe.datetime.now_time();
              frm.set_value("time_reach", currentDateTime);

              // Calculate Distance using Leaflet Library
              var startPoint = L.latLng(
                frm.doc.from_latitude,
                frm.doc.from_longitude
              );
              var endPoint = L.latLng(latitude2, longitude2);
              var distanceMeter = startPoint.distanceTo(endPoint);
              var distanceInKilometer = ((distanceMeter / 1000) * 1.2).toFixed(
                2
              );
              frm.set_value("distance_in_kilometer", distanceInKilometer);

              frm.set_value("status", "In-Progress");
              frm.save();
            },
            error: function (err) {
              console.error("Error getting location:", err);
              frappe.msgprint(
                __("Error getting location. Please try again later.")
              );
            },
          });
        },
        function (error) {
          console.error("Error getting geolocation:", error);
          frappe.msgprint(
            __("Error getting geolocation. Please check your browser settings.")
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      frappe.msgprint(__("Geolocation is not supported by this browser."));
    }
  },
});

let modeValue;

frappe.ui.form.on("TA", {
  mode_of_transport: function (frm) {
    const carFare = 10;
    const bikeFare = 4;

    let fareAmount = 0;
    let totalKm = frm.doc.distance_in_kilometer;
    modeValue = frm.doc.mode_of_transport;
    console.log(modeValue);

    frm.toggle_display("ticket", false);
    frm.toggle_display("upload_ticket_image", false);
    frm.toggle_display("fare_amount", false);

    if (modeValue === "Two Wheeler") {
      fareAmount = bikeFare * totalKm;
      frm.toggle_display("fare_amount", true);
    } else if (modeValue === "Four Wheeler") {
      fareAmount = carFare * totalKm;
      frm.toggle_display("fare_amount", true);
    } else if (modeValue === "Bus" || modeValue === "Train") {
      frm.toggle_display("ticket", true);
      /*arshad change*/ frm.set_value("ticket", null);
      frm.toggle_display("upload_ticket_image", true);
      frm.toggle_display("fare_amount", true);
    } else {
      frm.toggle_display("ticket", false);
      frm.toggle_display("upload_ticket_image", false);
      frm.toggle_display("fare_amount", false);
      fareAmount = 0;
    }

    // Set the value of 'fare_amount' field for Bike and Car modes
    frm.set_value("fare_amount", fareAmount);
    //frm.refresh_field("ticket");
  },
  ticket: function (frm) {
    frm.set_value("fare_amount", frm.doc.ticket);
    /*arshad change*/ //frm.set_value("ticket", null);
  },
});

frappe.ui.form.on("TA", {
  refresh: function (frm) {
    // Change the color of the button with ID "my-button" to red
    frm.fields_dict.submit_data.$input.css("background-color", "#008B8B");
    // You can also change other styles such as text color
    frm.fields_dict.submit_data.$input.css("color", "white");
  },
});

frappe.ui.form.on("TA", {
  refresh: function (frm) {
    frm.set_df_property("travel_allowance_sheet", "cannot_add_rows", true); // Hide add row button
    frm.set_df_property("travel_allowance_sheet", "cannot_delete_rows", true); // Hide delete button
    //frm.set_df_property("travel_allowance_sheet", "check", false); // Hide delete all button
  },
});
