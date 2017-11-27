materialAdmin

    //====================================
    // ALERT
    //====================================

    .controller('AlertDemoCtrl', function ($scope) {
        $scope.alerts = [
            { type: 'info', msg: "Well done! You successfully read this important alert message." },
            { type: 'success', msg: "Well done! You successfully read this important alert message." },
            { type: 'warning', msg: "Warning! Better check yourself, you're not looking too good." },
            { type: 'danger', msg: "Oh snap! Change a few things up and try submitting again." }
        ];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    })


    //====================================
    // BUTTONS
    //====================================

    .controller('ButtonsDemoCtrl', function ($scope) {
        $scope.singleModel = 1;

        $scope.radioModel = 'Middle';

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };
    })


    //====================================
    // CAROUSEL
    //====================================

    .controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 0;
        $scope.slides = [
            {
                img: 'c-1.jpg',
                title: 'First Slide Label',
                text: 'Some sample text goes here...'
            },
            {
                img: 'c-2.jpg',
                title: 'Second Slide Label',
                text: 'Some sample text goes here...'
            },
            {
                img: 'c-3.jpg'
            }
        ];

    })


    //====================================
    // CAROUSEL
    //====================================

    .controller('CollapseDemoCtrl', function ($scope) {
        $scope.isCollapsed = false;
    })


    //====================================
    // DROPDOWN
    //====================================

    .controller('UibDropdownDemoCtrl', function ($scope) {
        $scope.items = [
            { name: 'The first choice!', icon: 'home' },
            { name: 'And another choice', icon: 'account' },
            { name: 'But wait! A third!', icon: 'email' },
            { name: 'And fourth on here', icon: 'pin' }
        ];
    })


    //====================================
    // MODAL
    //====================================
    .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

        $scope.modalContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.';

        //Create Modal
        function modalInstances(animation, size, backdrop, keyboard) {
            var modalInstance = $uibModal.open({
                animation: animation,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                backdrop: backdrop,
                keyboard: keyboard,
                resolve: {
                    content: function () {
                        return $scope.modalContent;
                    }
                }

            });
        }

        //Custom Sizes
        $scope.open = function (size) {
            modalInstances(true, size, true, true)
        }

        //Without Animation
        $scope.openWithoutAnimation = function() {
            modalInstances(false, '', true, true)
        }

        //Prevent Outside Click
        $scope.openStatic = function () {
            modalInstances(true, '', 'static', true)
        };

        //Disable Keyboard
        $scope.openKeyboard = function () {
            modalInstances(true, '', true, false)
        };

    })

    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $modal service used above.

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, content) {

          $scope.modalContent = content;

          $scope.ok = function () {
            $modalInstance.close();
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
    })


    //====================================
    // PAGINATION
    //====================================

    .controller('PaginationDemoCtrl', function ($scope, $log) {
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    })


    //====================================
    // POPOVER
    //====================================

    .controller('PopoverDemoCtrl', function ($scope) {
        $scope.dynamicPopover = {
            templateUrl: 'myPopoverTemplate.html',
        };
    })

    //====================================
    // PROGRESSBAR
    //====================================

    .controller('ProgressDemoCtrl', function ($scope) {
        $scope.max = 200;

        $scope.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
                type = 'success';
            }
            else if (value < 50) {
                  type = 'info';
            }
            else if (value < 75) {
                  type = 'warning';
            }
            else {
                  type = 'danger';
            }

            $scope.showWarning = (type === 'danger' || type === 'warning');

            $scope.dynamic = value;
            $scope.type = type;
        };

        $scope.random();

        $scope.randomStacked = function() {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                $scope.stacked.push({
                    value: Math.floor((Math.random() * 30) + 1),
                    type: types[index]
                });
            }
        };

        $scope.randomStacked();
    })


    //====================================
    // TABS
    //====================================

    .controller('TabsDemoCtrl', function ($scope, $window) {
        $scope.tabs = [
            {
                title:'INFORMACIÓN BASICA',
                "id": 10238,
                "name": "Marc Barnes",
                "email": "marc.barnes54@example.com",
                "username": "MarcBarnes",
                "contact": "(382)-122-5003"
            },
            // {
            //     title:'Profile',
            //     content:'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla sit amet est. Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Nulla porta dolor. Cras dapibus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
            // },
            // {
            //     title:'Messages',
            //     content:'s, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.',
            // },
            // {
            //     title:'Settings',
            //     content:'Praesent turpis. Phasellus magna. Fusce vulputate eleifend sapien. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
            // }
        ];

        $scope.tab2 = [
            {
title:'detalle del error',
"id":46559,
"fecha_creacion":"2017-11-27 09:16:45",
"causa_del_error":"co.com.hypersoft.hypersoftwfclient.dataservices.exception.WflUserCalendarFacadeException: No se encontraron resultados",
"detalle_del_error":"co.com.hypersoft.hypersoftwfclient.funcionalities.exception.AdminUserAngularServicesException: (Error: AUA_175) No se encontraron resultados. No se encontraron resultados. at co.com.hypersoft.hypersoftwflejb.funcionalities.AdminUserAngularServices.findCalendarByUser(AdminUserAngularServices.java:1337) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.aop.joinpoint.MethodInvocation.invokeTarget(MethodInvocation.java:122) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:111) at org.jboss.ejb3.interceptors.container.ContainerMethodInvocationWrapper.invokeNext(ContainerMethodInvocationWrapper.java:72) at org.jboss.ejb3.interceptors.aop.InterceptorSequencer.invoke(InterceptorSequencer.java:76) at org.jboss.ejb3.interceptors.aop.InterceptorSequencer.aroundInvoke(InterceptorSequencer.java:62) at sun.reflect.GeneratedMethodAccessor602.invoke(Unknown Source) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.aop.advice.PerJoinpointAdvice.invoke(PerJoinpointAdvice.java:174) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor.fillMethod(InvocationContextInterceptor.java:74) at org.jboss.aop.advice.org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor_z_fillMethod_204339075.invoke(InvocationContextInterceptor_z_fillMethod_204339075.java) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor.setup(InvocationContextInterceptor.java:90) at org.jboss.aop.advice.org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor_z_setup_204339075.invoke(InvocationContextInterceptor_z_setup_204339075.java) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.async.impl.interceptor.AsynchronousServerInterceptor.invoke(AsynchronousServerInterceptor.java:128) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.connectionmanager.CachedConnectionInterceptor.invoke(CachedConnectionInterceptor.java:62) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.entity.TransactionScopedEntityManagerInterceptor.invoke(TransactionScopedEntityManagerInterceptor.java:56) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.AllowedOperationsInterceptor.invoke(AllowedOperationsInterceptor.java:47) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.tx.NullInterceptor.invoke(NullInterceptor.java:42) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.stateless.StatelessInstanceInterceptor.invoke(StatelessInstanceInterceptor.java:68) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.core.context.SessionInvocationContextAdapter.proceed(SessionInvocationContextAdapter.java:95) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.invokeInOurTx(CMTTxInterceptor.java:247) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.required(CMTTxInterceptor.java:349) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.invoke(CMTTxInterceptor.java:209) at org.jboss.ejb3.tx2.aop.CMTTxInterceptorWrapper.invoke(CMTTxInterceptorWrapper.java:52) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.aspects.tx.TxPropagationInterceptor.invoke(TxPropagationInterceptor.java:76) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.RunAsSecurityInterceptorv2.invoke(RunAsSecurityInterceptorv2.java:94) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.RoleBasedAuthorizationInterceptorv2.invoke(RoleBasedAuthorizationInterceptorv2.java:201) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.Ejb3AuthenticationInterceptorv2.invoke(Ejb3AuthenticationInterceptorv2.java:182) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.ENCPropagationInterceptor.invoke(ENCPropagationInterceptor.java:41) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.BlockContainerShutdownInterceptor.invoke(BlockContainerShutdownInterceptor.java:67) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.core.context.CurrentInvocationContextInterceptor.invoke(CurrentInvocationContextInterceptor.java:47) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.aspects.currentinvocation.CurrentInvocationInterceptor.invoke(CurrentInvocationInterceptor.java:67) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptor.EJB3TCCLInterceptor.invoke(EJB3TCCLInterceptor.java:86) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.session.SessionSpecContainer.invoke(SessionSpecContainer.java:333) at org.jboss.ejb3.session.SessionSpecContainer.invoke(SessionSpecContainer.java:390) at sun.reflect.GeneratedMethodAccessor603.invoke(Unknown Source) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.ejb3.proxy.impl.handler.session.SessionLocalProxyInvocationHandler$LocalContainerInvocation.invokeTarget(SessionLocalProxyInvocationHandler.java:184) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:111) at org.jboss.ejb3.async.impl.interceptor.AsynchronousClientInterceptor.invoke(AsynchronousClientInterceptor.java:143) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.proxy.impl.handler.session.SessionLocalProxyInvocationHandler$LocalInvokableContextHandler.invoke(SessionLocalProxyInvocationHandler.java:159) at com.sun.proxy.$Proxy790.invoke(Unknown Source) at org.jboss.ejb3.proxy.impl.handler.session.SessionProxyInvocationHandlerBase.invoke(SessionProxyInvocationHandlerBase.java:185) at com.sun.proxy.$Proxy831.findCalendarByUser(Unknown Source) at co.com.hypersoft.hypersoftservices.services.AdminUserServices.findCalendarByUser(AdminUserServices.java:674) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.resteasy.core.MethodInjectorImpl.invoke(MethodInjectorImpl.java:140) at org.jboss.resteasy.core.ResourceMethod.invokeOnTarget(ResourceMethod.java:255) at org.jboss.resteasy.core.ResourceMethod.invoke(ResourceMethod.java:220) at org.jboss.resteasy.core.ResourceMethod.invoke(ResourceMethod.java:209) at org.jboss.resteasy.core.SynchronousDispatcher.getResponse(SynchronousDispatcher.java:519) at org.jboss.resteasy.core.SynchronousDispatcher.invoke(SynchronousDispatcher.java:496) at org.jboss.resteasy.core.SynchronousDispatcher.invokePropagateNotFound(SynchronousDispatcher.java:155) at org.jboss.resteasy.plugins.server.servlet.ServletContainerDispatcher.service(ServletContainerDispatcher.java:212) at org.jboss.resteasy.plugins.server.servlet.FilterDispatcher.doFilter(FilterDispatcher.java:59) at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:274) at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:242) at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:275) at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:161) at org.jboss.web.tomcat.security.SecurityAssociationValve.invoke(SecurityAssociationValve.java:181) at org.jboss.modcluster.catalina.CatalinaContext$RequestListenerValve.event(CatalinaContext.java:285) at org.jboss.modcluster.catalina.CatalinaContext$RequestListenerValve.invoke(CatalinaContext.java:261) at org.jboss.web.tomcat.security.JaccContextValve.invoke(JaccContextValve.java:88) at org.jboss.web.tomcat.security.SecurityContextEstablishmentValve.invoke(SecurityContextEstablishmentValve.java:100) at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:159) at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102) at org.jboss.web.tomcat.service.jca.CachedConnectionValve.invoke(CachedConnectionValve.java:158) at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109) at org.jboss.web.tomcat.service.request.ActiveRequestResponseCacheValve.invoke(ActiveRequestResponseCacheValve.java:53) at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:362) at org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:877) at org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:654) at org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:951) at java.lang.Thread.run(Thread.java:748) Caused by: co.com.hypersoft.hypersoftwfclient.dataservices.exception.WflUserCalendarFacadeException: No se encontraron resultados. at co.com.hypersoft.hypersoftwflejb.dataservices.WflUserCalendarFacade.findByUser(WflUserCalendarFacade.java:147) at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.aop.joinpoint.MethodInvocation.invokeTarget(MethodInvocation.java:122) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:111) at org.jboss.ejb3.interceptors.container.ContainerMethodInvocationWrapper.invokeNext(ContainerMethodInvocationWrapper.java:72) at org.jboss.ejb3.interceptors.aop.InterceptorSequencer.invoke(InterceptorSequencer.java:76) at org.jboss.ejb3.interceptors.aop.InterceptorSequencer.aroundInvoke(InterceptorSequencer.java:62) at sun.reflect.GeneratedMethodAccessor602.invoke(Unknown Source) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.aop.advice.PerJoinpointAdvice.invoke(PerJoinpointAdvice.java:174) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor.fillMethod(InvocationContextInterceptor.java:74) at org.jboss.aop.advice.org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor_z_fillMethod_204339075.invoke(InvocationContextInterceptor_z_fillMethod_204339075.java) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor.setup(InvocationContextInterceptor.java:90) at org.jboss.aop.advice.org.jboss.ejb3.interceptors.aop.InvocationContextInterceptor_z_setup_204339075.invoke(InvocationContextInterceptor_z_setup_204339075.java) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.async.impl.interceptor.AsynchronousServerInterceptor.invoke(AsynchronousServerInterceptor.java:128) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.connectionmanager.CachedConnectionInterceptor.invoke(CachedConnectionInterceptor.java:62) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.entity.TransactionScopedEntityManagerInterceptor.invoke(TransactionScopedEntityManagerInterceptor.java:56) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.AllowedOperationsInterceptor.invoke(AllowedOperationsInterceptor.java:47) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.tx.NullInterceptor.invoke(NullInterceptor.java:42) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.stateless.StatelessInstanceInterceptor.invoke(StatelessInstanceInterceptor.java:68) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.core.context.SessionInvocationContextAdapter.proceed(SessionInvocationContextAdapter.java:95) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.invokeInCallerTx(CMTTxInterceptor.java:223) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.required(CMTTxInterceptor.java:353) at org.jboss.ejb3.tx2.impl.CMTTxInterceptor.invoke(CMTTxInterceptor.java:209) at org.jboss.ejb3.tx2.aop.CMTTxInterceptorWrapper.invoke(CMTTxInterceptorWrapper.java:52) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.aspects.tx.TxPropagationInterceptor.invoke(TxPropagationInterceptor.java:76) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.RunAsSecurityInterceptorv2.invoke(RunAsSecurityInterceptorv2.java:94) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.RoleBasedAuthorizationInterceptorv2.invoke(RoleBasedAuthorizationInterceptorv2.java:201) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.security.Ejb3AuthenticationInterceptorv2.invoke(Ejb3AuthenticationInterceptorv2.java:182) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.ENCPropagationInterceptor.invoke(ENCPropagationInterceptor.java:41) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.BlockContainerShutdownInterceptor.invoke(BlockContainerShutdownInterceptor.java:67) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.core.context.CurrentInvocationContextInterceptor.invoke(CurrentInvocationContextInterceptor.java:47) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.aspects.currentinvocation.CurrentInvocationInterceptor.invoke(CurrentInvocationInterceptor.java:67) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.interceptor.EJB3TCCLInterceptor.invoke(EJB3TCCLInterceptor.java:86) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.session.SessionSpecContainer.invoke(SessionSpecContainer.java:333) at org.jboss.ejb3.session.SessionSpecContainer.invoke(SessionSpecContainer.java:390) at sun.reflect.GeneratedMethodAccessor603.invoke(Unknown Source) at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at java.lang.reflect.Method.invoke(Method.java:606) at org.jboss.ejb3.proxy.impl.handler.session.SessionLocalProxyInvocationHandler$LocalContainerInvocation.invokeTarget(SessionLocalProxyInvocationHandler.java:184) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:111) at org.jboss.ejb3.async.impl.interceptor.AsynchronousClientInterceptor.invoke(AsynchronousClientInterceptor.java:143) at org.jboss.aop.joinpoint.MethodInvocation.invokeNext(MethodInvocation.java:102) at org.jboss.ejb3.proxy.impl.handler.session.SessionLocalProxyInvocationHandler$LocalInvokableContextHandler.invoke(SessionLocalProxyInvocationHandler.java:159) at com.sun.proxy.$Proxy790.invoke(Unknown Source) at org.jboss.ejb3.proxy.impl.handler.session.SessionProxyInvocationHandlerBase.invoke(SessionProxyInvocationHandlerBase.java:185) at com.sun.proxy.$Proxy652.findByUser(Unknown Source) at co.com.hypersoft.hypersoftwflejb.funcionalities.AdminUserAngularServices.findCalendarByUser(AdminUserAngularServices.java:1320) ... 102 more Caused by: javax.persistence.NoResultException: getSingleResult() did not retrieve any entities. at org.eclipse.persistence.internal.jpa.QueryImpl.throwNoResultException(QueryImpl.java:866) at org.eclipse.persistence.internal.jpa.QueryImpl.getSingleResult(QueryImpl.java:447) at org.eclipse.persistence.internal.jpa.EJBQueryImpl.getSingleResult(EJBQueryImpl.java:382) at co.com.hypersoft.hypersoftwflejb.dataservices.WflUserCalendarFacade.findByUser(WflUserCalendarFacade.java:141) ... 172 more",
"codigo_del_error":"AUA_175",
"origen_del_error":"FUNCIONALIDAD",
"token":"611D47C032C14E7F",
"usuario":"luis.torrenegra@hypersoft.co",
"canal_donde_se_hizo_el_llamado":"WEB_ANGULAR",
"tipo_error":"NO_RESULT",
"mensaje_mostrado_al_usuario":"(Error: AUA_175) No se encontraron resultados. No se encontraron resultados."
},

            // {
            //     title:'Profile',
            //     content:'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla sit amet est. Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Nulla porta dolor. Cras dapibus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
            // },
            // {
            //     title:'Messages',
            //     content:'s, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.',
            // },
            // {
            //     title:'Settings',
            //     content:'Praesent turpis. Phasellus magna. Fusce vulputate eleifend sapien. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
            // }
        ];

    })


    //====================================
    // TOOLTIPS
    //====================================

    .controller('TooltipDemoCtrl', function ($scope, $sce) {
          $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
    })


    //====================================
    // DATE PICKER
    //====================================
    .controller('DatepickerDemoCtrl', function ($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();


        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event, opened) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope[opened] = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
    })



    //====================================
    // TYPEAHEAD
    //====================================
    .controller('TypeaheadCtrl', function($scope, $http) {

        $scope.selected = undefined;
        $scope.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];

        // Any function returning a promise object can be used to load values asynchronously
        $scope.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response){
                return response.data.results.map(function(item){
                    return item.formatted_address;
                });
            });
        }
    })
