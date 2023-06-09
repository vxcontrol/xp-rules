{
    "action": "modify",
    "event_src.category": "Other",
    "event_src.fqdn": "server16.server16.int",
    "event_src.hostname": "server16",
    "event_src.subsys": "Microsoft-Windows-Sysmon/Operational",
    "event_src.title": "sysmon",
    "event_src.vendor": "microsoft",
    "id": "PT_Microsoft_Windows_eventlog_Sysmon_19_WMI_event_filter_activity_detected",
    "importance": "info",
    "msgid": "19",
    "object": "resource",
    "object.fullpath": "root\\\\cimv2\\ServiceFilter",
    "object.name": "ServiceFilter",
    "object.path": "root\\\\cimv2",
    "object.query": "select * from __instanceModificationEvent within 5 where targetInstance isa 'win32_Service'",
    "object.state": "modified",
    "object.type": "event filter",
    "status": "success",
    "subject": "account",
    "subject.account.domain": "server160",
    "subject.account.id": "synthetic:administrator@server160",
    "subject.account.name": "administrator",
    "time": "2018-11-21T07:47:03.559Z"
}
