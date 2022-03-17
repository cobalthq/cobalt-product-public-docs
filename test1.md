Budget View Report
Last Updated March 1, 2022
The DCI Budget View report provides a graphical representation of the budgeted and actual MSU consumption within a specific budget period.
The Budget View report in the DCI web UI displays a visual representation of the budgeted and actual MSU consumption data for all systems that you included in the budget monitoring. The report displays the yearly consumption statistics based on the budget periods that you configure for the budget view. For more information, see Budget View.
Budget View in the DCI Web UI
To view a report for a specific range of time, select a budget period from the Select Billing Year list box. You define the budget periods during the budget view configuration. For more information, see Configure Budget View.
For the selected budget period, the report displays the following values:
Baseline MSUs
The value represents the number of MSUs as defined in your TFP contract for the selected period.
Prior Year Rollover
The value represents the number of MSUs that were carried over from the previous contract period.
Actual MSUs
The value represents the real total MSU consumption that DCI collects within the budget period across all LPARs that are included in the budget monitoring. The table row Actual displays the total value and the MSU consumption values in each month.
The Actuals values that DCI collects might slightly differ from the SCRT reports because of the difference in the data gathering and processing methods. You can also provide the SCRT values in the budget period settings in the DCI Budget View ISPF interface to display the SCRT values as the Actuals.
Remaining Budget
The value represents the number of currently available MSUs.
MSU Balance
The value represents the estimated number of MSUs that will remain by the end of the budget period. The MSU Balance value is based on the current actual consumption of prior months and budgeted consumption of upcoming months.
A negative value indicates that you might overspend the budget by the end of the period.
A positive value indicates that you might underspend the budget by the end of the period.
The MSU balance information allows you time to react and make adjustments or corrections to control MSU consumption in advance of the end of the budget period.
Budgeted (total/by month)
The value represents the number of MSUs that you allocated for the period in the DCI Budget View ISPF interface.
Actual/Budget% (average/by month)
The value represents the ratio of actual to budgeted MSUs.
Values above 100% indicate that your actual consumption exceeds your initially budgeted MSUs (an overspend).
Values below 100% indicate that actual consumption was below your budgeted MSUs (an underspend).
The chart elements represent the following values:
Baseline+Rollover line
The line represents the total number of MSUs that are available for the budget period.
Blue bar
The bar represents the actual MSU consumption for the specific month.
Grey bar
The bar represents the budgeted MSU consumption for the specific month.
Budgeted Sum line
The line represents the running total for budgeted MSU consumption in the period.
Actual Sum line
The line represents the running total for actual MSU consumption in the period.
Projected Sum line
The line represents the running total for projected MSU consumption in the period. The value is computed using the actual MSU consumption of prior months and the budgeted MSU consumption of upcoming months.