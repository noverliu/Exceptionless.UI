import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotkeysService } from 'angular2-hotkeys';
import { ClipboardService } from 'ngx-clipboard';
import { BillingService } from '../../../../../service/billing.service';
import { ErrorService } from '../../../../../service/error.service';
import { EventService } from '../../../../../service/event.service';
import { FilterService } from '../../../../../service/filter.service';
import { LinkService } from '../../../../../service/link.service';
import { NotificationService } from '../../../../../service/notification.service';
import { ProjectService } from '../../../../../service/project.service';
import { EventComponent } from '../../event.component';

@Component({
    selector: 'app-event-tabs',
    templateUrl: './event-tabs.component.html'
})

export class EventTabsComponent extends EventComponent {
    @Input() tab;
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        hotkeysService: HotkeysService,
        clipboardService: ClipboardService,
        billingService: BillingService,
        errorService: ErrorService,
        eventService: EventService,
        filterService: FilterService,
        linkService: LinkService,
        notificationService: NotificationService,
        projectService: ProjectService,
    ) {
        super(router, activatedRoute, hotkeysService, clipboardService, billingService, errorService, eventService, filterService, linkService, notificationService, projectService);
    }
}
