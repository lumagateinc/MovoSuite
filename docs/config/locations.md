### Locations<!-- omit in toc -->

Locations in MovoSuite underpin much of the automation, supporting device naming and role based access. Specifically, creating a location services to:
- provision an Intune scope tag with the short code for the location
- provision an **assigned** self-service group for the location, named based on the short code (defaults to _Z-SG-**SHORTCODE**-Self Service Users_)
- provision an **assigned** field tech group for the location, named based on the short code (defaults to _Z-SG-**SHORTCODE**-Field Tech Users_)
- provision a **dynamic** device group for the location, named based on the short code (defaults to _Z-DG-**SHORTCODE**-All iOS Devices_) and matching devices who's name starts with the short code

Additionally, a delegated approver for deployment and purchasing can be defined per location. This enables approval requests to be routed to someone like a principal at a school for first pass, and then routed to the MovoSuite globally defined approvers. You can also select a VPP token for a specific location. Selecting a VPP token for a specific location will add the Intune Scope Tag to the token, allowing members of the location's self service user group to view the apps on that token.

![020](../images/cfg_loc_all.png)

**FIGURE 20**. Location Details list

[back to ToC](../README.md) \| [back to Configuration](./README.md)