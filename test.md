Using
Last Updated March 23, 2022
DCI provides a proactive, predictable capacity management for optimizing system resources for prioritized workloads. This capacity management tool helps you better manage and use mainframe capacity, thus helping drive down Monthly License Charges (MLC). Intelligent automation avoids unplanned spikes in cost and helps IT to manage Service Level Agreements (SLAs) through automated and dynamic capacity optimization.
DCI is an easy–to–use, fully automated and intelligent capacity management, and real–time dynamic capping solution. The solution is designed to streamline your ability to monitor and effectively manage SLAs and improve the operational efficiency. It helps IT to achieve the values by enabling priority mainframe workloads to the required capacity to meet SLAs and facilitates predictable, transparent budgeting.
DCI continually analyzes the workload capacity and dynamically manages capacity that is based on the active policy definitions. Use the ISPF to manage capacity among LPARs and groups with policies.
View status of systems
The Status panel in the ISPF interface shows the current MSU consumption of all the entities that are managed by DCI, and the active policy definitions.
Create and Edit Policies to Manage MSU Consumption
DCI allows reallocation of MSUs based on current workload and defined multiple capping policies that are automatically activated depending on the set schedules. The policies let you define the following settings for LPARs:
Create group of LPARs
The Policies option lets you create groups of LPARs to adjust the MSU allocation based on the workload requirement.
Define minimum and maximum MSU Ranges for LPARs and Groups
Where, minimum MSU is a target usage and the MAX MSU is a capping limit for LPARs and groups.  With the defined MUS limits, DCI limits the MSU usage among LPARs and groups to meet SLAs without letting the R4HA increase above these specified MSU limits. If the workload is more than the defined minimum MSU value, DCI maintains the current MSU usage below the MAX MSU with the reallocation.
Profiles
DCI lets you assign profiles in three levels that are the capacity group, group, and LPAR. Profile functionality depends on the specified importance levels and defined max and min MSUs for the entities. DCI allocates the resources to LPARs based on the LPAR profiles within the group and the profile that is assigned to the group. Assign the combination of high important, medium important, and less important LPARs to keep the R4HA and group MSU usage to the minimum.
Assign the workload category for LPARs
In z/OS, a Workload Manager (WLM) uses workload classification, service classes, and performance objectives to manage the resources of the system to meet business objectives. Every unit of work that WLM manages is rated by relative importance from 1 (highest) to 5 (lowest), and Discretionary (no importance). DCI provides three levels workload categorization such as Business Critical (BC), Time Critical (TC), and Not Time Critical (NTC). DCI lets you assign the WLM classification levels to DCI workload category. For example, in LPAR-A, importance levels, 5 and 6 may be considered NTC, while in LPAR-B importance levels 4 and 5 may be considered TC and only D is considered NTC. This flexibility allows one LPAR to run more workloads that are considered time critical compared to another that runs more low-importance workloads.
Define AUTOMIN and AUTOMAX
If defined minimum usages have already been exceeded, they can be defined to become the new baseline.
If the R4HA reaches above the defined target (that is MIN) MSU to meet SLAs, it leads to a new MLC. At this point, it is optimal to continue trying to keep the MSU below the MIN MSU specification for the billing period. The AUTOMIN variable sets to the new R4HA, allows the workloads to use the additional buffer. Similarly, an AUTOMAX value helps avoid new peaks during less critical times. Unless this is an unexpected anomaly, the next billing cycle automatically resets to the MIN/MAX MSU. This mechanism allows organizations to continue attempting to lower MSU while still protecting SLAs from changes that might be overly ambitious.
Schedule Policies for Automated Activation
DCI automatically switches between the policies that are in the QUEUED status. The automated policy activation removes the manual effort that is associated with managing capping limits, using proprietary engines to calculate how MSU is distributed between LPARs.
Overwrite a Policy for a Defined Period
DCI allows you to manually activate your desired policy during the unexpected situations. For example, emergency policy. If there is an unexpected increase in the workload, you can activate the desired emergency policy instead of the scheduled policy for an automated activation.
Policy Override for the selected System
DCI lets you override the active policy settings to address emergency or unplanned issues to circumvent the unexpected situation. DCI lets you temporarily overwrite an MSU value for a system that is attached to an active policy. During the defined time period, the new values overwrite the original values as defined in the active policy for the specified time. After the specified time is over, the MSU value for the system resets to the original values as defined in the active policies.
Define Non-businessday Calendar
DCI provides calendar facilities that allow you to automatically switch to the policies that are based on dates and times. This allows scheduled policies to temporarily overwrite the base policy to support the use of different policies to address business days and hours, evenings, weekends, holidays, and/or special events (For example, Black Friday, Christmas, and so on.).
Define Alerts
DCI lets you define email notifications or email alerts that you want to receive when the MSU consumption threshold is reached on a system that is managed by an active policy. You can set alerts that are based on group capacity limit or MSU limit of the system.
View Logs
The Activity Log, logs the important actions that are based on the active policy. DCI saves the logged information for one month, from the second day of the month until the first day of the following month.
Refer to the topics that are listed in the Using section to manage MSU with DCI features that are available in the ISPF interface.
