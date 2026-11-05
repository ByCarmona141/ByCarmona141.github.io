export interface ModalSection {
    desc: string;
    bullets: string[];
  }
  
  export interface Project {
    key: string;
    category: string;
    version: string;
    cardTitle: string;
    description: string;
    image: string;
    imageBadge: string;
    imageBadgeClass: string;
    tags: string[];
    github?: string;
    demo?: string;
    nda?: boolean;
    icon?: string; // se muestra solo si no hay enlaces
    modal: {
      badge: string;
      title: string;
      latency: string;
      summary: string;
      tech: string[];
      arch: ModalSection;
      data: ModalSection;
      sec: ModalSection;
    };
  }
  
  const IMG_DOCUMENTAL =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDeD-3Z_bLU1MYbSieGYdG70u3eTX3knRN9KVG7y2hlZgiorPOEAQBu8yrQp-Bya-RxyHhOqM5wr3P5CCSQ6bk7WMr041LtaNavLIWOIDWp1kGd5hdTnSUH_ln3pUs9jxFmjY5Tq3dqfQ8E_F6PkQ1mTOEt8vmEvUsaYgY-9mnrq7Ltjdh4L36VRGTMB6H8mdFZOtiWCzZjwGMx1GyIGsgsKsUrgw8IuNZ6drNhFYg';
  const IMG_TELEMETRIA =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAXXFn9lKjD0Dmh06KUeP2mm-Sqa7HrR85Ac73nvW2BYVuS-on68fZus5q5PdjQRMESOIctdSehX4Jq3TZTrprkNclHiyGxIJn2aG-ozyNcxlCmp4J6fLmGyuYjPrugHXehJNfRkpz9Q9Lc8Q8irByBzIUIuKMjA2mj2B9JKp48chJbvqT8mJ1sOiwIMGWjfW64_1zipIlrSHyyHzeEao38ehZC5xKf_S3kV-Mmmns';
  const IMG_AUDITORIA =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCyA3Hd_mNPO_VRxpWtvvGnXz4C07n3Gs9JaUlc8iang4Q975CuZtbMtrYgr_9PdctH7EL2Aq61owW4vXxfTTc80RHG071sGls82n8sro_Gv_syep6rRBN_abJGm1PQfjVksOibEEJjZflVwbfvKDKX8tPeIc7al9Jj_f8nTdOzNUBgveS_RRFGwLYjbCsNcpM_gk6b13gP2rTXpazBaCbSNCEvq_-WzviL-z8LbKs';
  
  export const projects: Project[] = [
    {
      key: 'documental',
      category: 'GESTIÓN & ARCHIVO',
      version: 'V3.2',
      cardTitle: 'Documental',
      description:
        'Plataforma de gestión documental y archivo digital estructurado. Diseñada con un enfoque central en la trazabilidad inmutable, control estricto de versiones y permisos granulares por departamento.',
      image: IMG_DOCUMENTAL,
      imageBadge: 'Trazabilidad',
      imageBadgeClass: 'bg-primary text-on-primary',
      tags: ['Laravel', 'Angular', 'MySQL', 'RBAC'],
      github: 'https://github.com/ByCarmona141/documental',
      demo: 'https://bycarmona141.dev/demo/documental',
      modal: {
        badge: 'V3.2 • PRODUCCIÓN',
        title: 'Documental: Plataforma de Archivo Digital',
        latency: 'P99: 18ms',
        summary:
          'Plataforma para expedientes digitales e indexación relacional con certificación de inmutabilidad, control de versiones SHA-256 y matrices de autorización jerárquica.',
        tech: ['Laravel 10', 'Angular SPA', 'MySQL 8', 'RBAC Granular', 'Flysystem S3', 'Redis Cache'],
        arch: {
          desc: 'Implementada bajo el patrón Repository & Service Layer en Laravel, aislando la lógica de negocio de los adaptadores de almacenamiento de archivos y contratos de vista.',
          bullets: [
            'Domain-Driven Design (DDD) con agregados para expedientes y folios judiciales.',
            'Inyección de dependencias para abstracción de drivers de almacenamiento (S3 / Local).',
            'Angular Component Store para administración de estado en formularios masivos sin recargas.',
          ],
        },
        data: {
          desc: 'Esquema relacional en MySQL 8 optimizado con particionamiento de tablas por año fiscal e índices compuestos en claves de búsqueda frecuentes.',
          bullets: [
            'Transacciones ACID con aislamiento REPEATABLE READ para prevenir lecturas fantasmas.',
            'Registro de pistas de auditoría (audit trail) en tablas de bitácora append-only.',
            'Colas de procesamiento asíncrono con Redis para generación de firmas y hashes SHA-256.',
          ],
        },
        sec: {
          desc: 'Cumplimiento de estándares de custodia digital, prevención de Inyecciones SQL y mitigación de OWASP Top 10 BOLA mediante políticas Gate/Policy estrictas.',
          bullets: [
            'Validación biométrica/token RBAC en cada endpoint de descarga de adjuntos.',
            'Sanitización forzada de nombres de archivo y firmas MIME en memoria antes de persistencia.',
            'Latencia P99 inferior a 20ms en consultas de metadatos de más de 250,000 registros.',
          ],
        },
      },
    },
    {
      key: 'sagadegro',
      category: 'TELEMETRÍA & IOT',
      version: 'ACTIVE',
      cardTitle: 'Dispositivos Sagadegro',
      description:
        'Sistema integral de administración, registro telemático y control operativo para inventario de dispositivos con emisión de eventos en tiempo real y persistencia optimizada.',
      image: IMG_TELEMETRIA,
      imageBadge: 'Tiempo Real',
      imageBadgeClass: 'bg-primary-container text-on-primary',
      tags: ['Angular', 'Laravel API', 'WebSockets', 'Redis'],
      github: 'https://github.com/ByCarmona141/dispositivos-sagadegro',
      demo: 'https://bycarmona141.dev/demo/dispositivos-sagadegro',
      modal: {
        badge: 'ACTIVE • SISTEMA EN VIVO',
        title: 'Dispositivos Sagadegro: Inventario Telemático',
        latency: 'P99: 12ms WebSocket',
        summary:
          'Centro de operaciones y telemetría en tiempo real para la monitorización de hardware y dispositivos de campo con soporte para transmisión bidireccional continua.',
        tech: ['Angular 17', 'Laravel Echo', 'WebSockets', 'Redis Pub/Sub', 'PostgreSQL', 'Docker'],
        arch: {
          desc: 'Arquitectura basada en eventos (EDA) utilizando Laravel WebSockets y Redis Pub/Sub acoplada a un frontend reactivo en Angular con canalizaciones RxJS.',
          bullets: [
            'Streams desacoplados con RxJS: mergeMap y throttleTime para gestionar picos de 500 msgs/seg.',
            'Middlewares de autenticación basada en JWT para handshakes en canales privados de WebSocket.',
            'Componentes de renderizado ligero Canvas/SVG para gráficas de telemetría de alto refresco.',
          ],
        },
        data: {
          desc: 'PostgreSQL con extensiones de series de tiempo para registrar latidos (heartbeats), voltajes y niveles de señal con compresión automática.',
          bullets: [
            'Inserción por lotes (bulk inserts) mediante trabajadores background de Laravel Horizon.',
            'Estrategia de cache en Redis para el último estado conocido (LKG) con expiración dinámica.',
            'Políticas de retención programada de datos de telemetría sin degradar índices principales.',
          ],
        },
        sec: {
          desc: 'Control de acceso basado en roles para emisión de comandos remotos a dispositivos y validación rigurosa de tramas de telemetría contra ataques de replay.',
          bullets: [
            'Verificación de nonce y sellos de tiempo HMAC en cada paquete enviado por el hardware.',
            'Rate limiting por token de dispositivo para mitigar inundaciones volumétricas.',
            'Latencia media de propagación de eventos inferior a 15ms punto a punto.',
          ],
        },
      },
    },
    {
      key: 'sorteos',
      category: 'FINTECH & AUDITORÍA',
      version: 'PROD',
      cardTitle: 'Sistema Sorteos la Montaña',
      description:
        'Plataforma transaccional para la gestión segura, asignación probabilística de folios y auditoría matemática de eventos de sorteos, diseñada para soportar picos masivos de solicitudes.',
      image: IMG_AUDITORIA,
      imageBadge: 'Alta Concurrencia',
      imageBadgeClass: 'bg-primary text-on-primary',
      tags: ['Laravel Core', 'Angular SPA', 'PostgreSQL', 'Lock Optimistic'],
      nda: true,
      demo: 'https://bycarmona141.dev/demo/sorteos-montana-sandbox',
      modal: {
        badge: 'PROD • ALTA CONCURRENCIA',
        title: 'Sistema Sorteos la Montaña: Motor Transaccional',
        latency: 'P99: 9ms',
        summary:
          'Motor de asignación y validación transaccional concebido para garantizar cero colisiones de folios durante picos masivos de venta y concurrencia sostenida.',
        tech: ['Laravel Core', 'Angular SPA', 'PostgreSQL', 'Redis Atomic Locks', 'Optimistic Locking'],
        arch: {
          desc: 'Diseño transaccional con arquitectura hexagonal. Lógica central de asignación desacoplada de la pasarela de pagos y de los adaptadores de notificación externa.',
          bullets: [
            'Bloqueo optimista y atómico respaldado por operaciones Redis EVAL Lua scripts.',
            'Manejadores de fallas con Circuit Breaker para pasarelas bancarias y pasarelas SMS.',
            'SPA en Angular con gestión de carrito resiliente a micro-desconexiones del cliente.',
          ],
        },
        data: {
          desc: 'PostgreSQL configurado con aislamiento Serializable en transacciones de emisión y asignación de folios numerados con chequeo de integridad doble.',
          bullets: [
            'Tablas relacionales con restricciones UNIQUE a nivel de motor de BD para evitar duplicidad.',
            'Snapshot de auditoría financiera con hash criptográfico previo a cada confirmación.',
            'Benchmarks de rendimiento: capacidad probada de más de 3,200 transacciones/min.',
          ],
        },
        sec: {
          desc: 'Blindaje contra ataques de condición de carrera (race conditions), prevención de fraude con tickets y verificación matemática de números aleatorios criptográficamente seguros.',
          bullets: [
            'Generación de secuencias vía PHP random_int / CSPRNG auditado matemáticamente.',
            'Token CSRF dinámico y headers estrictos Content-Security-Policy (CSP).',
            'Tasa de fallo y exfiltración de folios: 0.00% verificado en auditoría externa.',
          ],
        },
      },
    },
    {
      key: 'guardgate',
      category: 'API SECURITY GATEWAY',
      version: 'v2.1',
      cardTitle: 'GuardGate Telemetry',
      description:
        'Proxy inverso y middleware de detección heurística de anomalías HTTP, sanitización de payloads JSON en tiempo real y prevención de exfiltración de PII.',
      image: IMG_TELEMETRIA,
      imageBadge: 'MIDDLEWARE PROD',
      imageBadgeClass: 'bg-[#022E5B] text-white',
      tags: ['Laravel 11', 'Redis', 'WebSockets', 'PHP 8.3'],
      icon: 'shield_lock',
      modal: {
        badge: 'v2.1 • MIDDLEWARE PROD',
        title: 'GuardGate Telemetry: API Security Gateway',
        latency: 'P99: 4.8ms Overhead',
        summary:
          'Proxy inverso y middleware avanzado para la inspección y sanitización heurística de cargas útiles HTTP/JSON en tiempo real, bloqueando la fuga involuntaria de PII y secretos.',
        tech: ['Laravel 11', 'PHP 8.3', 'Redis', 'WebSockets', 'OWASP DLP', 'Docker Swarm'],
        arch: {
          desc: 'Canalización de middleware asíncrona de alto rendimiento en Laravel 11. Emplea corrutinas y buffers en memoria para analizar flujos de salida sin penalizar el tiempo de respuesta del backend.',
          bullets: [
            'Middleware Pipeline interceptor ejecutado en la fase post-routing de la solicitud HTTP.',
            'Regex heurístico compilado en extensiones C de PHP para reconocimiento de patrones de PII.',
            'Tablero de alertas telemetrizadas en tiempo real mediante canales WebSockets seguros.',
          ],
        },
        data: {
          desc: 'Almacenamiento ultraveloz de métricas de anomalía en Redis estructurado como TimeSeries y contadores HyperLogLog para estimación de cardinalidad de IPs atacantes.',
          bullets: [
            'Descarte automático de logs sin PII para garantizar estricto cumplimiento GDPR/LFPDPPP.',
            'Replicación primaria/réplica en Redis para tolerar interrupciones sin pérdida de telemetría.',
            'Exportador nativo de métricas compatible con formato Prometheus / Grafana.',
          ],
        },
        sec: {
          desc: 'Diseñado específicamente para mitigar las vulnerabilidades OWASP API Security Top 10, con énfasis especial en API3:2023 (Broken Object Property Level Authorization).',
          bullets: [
            'Detección y censura en el aire de tokens de acceso, RFCs, CURPs, tarjetas y hashes de passwords.',
            'Aislamiento y bloqueo dinámico de clientes anómalos mediante IP/Token scoring.',
            'Latencia añadida de inspección (overhead) contenida por debajo de 5 milisegundos.',
          ],
        },
      },
    },
    {
      key: 'optiaudit',
      category: 'AUDITORÍA & GOVERNANCE',
      version: 'V18.2',
      cardTitle: 'OptiAudit Core',
      description:
        'Módulo reactivo con Angular 18 y RxJS para trazabilidad de eventos distribuidos, firmas HMAC de integridad y dashboards de latencia P99.',
      image: IMG_AUDITORIA,
      imageBadge: 'ACTIVE',
      imageBadgeClass: 'bg-secondary text-white',
      tags: ['Angular SPA', 'RxJS', 'PostgreSQL', 'Docker'],
      icon: 'fact_check',
      modal: {
        badge: 'V18.2 • ACTIVE',
        title: 'OptiAudit Core: Trazabilidad & Latencia P99',
        latency: 'P99: 8.2ms Benchmark',
        summary:
          'Módulo integral de gobernanza de software y auditoría forense para eventos en microservicios, con firmas criptográficas HMAC, análisis de latencia percentil y observabilidad.',
        tech: ['Angular 18', 'RxJS Signals', 'PostgreSQL 16', 'Docker', 'OpenTelemetry', 'HMAC-SHA256'],
        arch: {
          desc: 'Frontend en Angular 18 utilizando el nuevo modelo reactivo de Signals en combinación con RxJS para manipulación declarativa de flujos de telemetría sin fugas de memoria.',
          bullets: [
            'Arquitectura zoneless en Angular para máximo rendimiento de render en matrices con >10k filas.',
            'Servicios desacoplados de transporte HTTP con interceptores de inmutabilidad y trazas W3C.',
            'Esquema tipado estricto de eventos con DTOs y validadores Zod/TypeScript compartidos.',
          ],
        },
        data: {
          desc: 'Base de datos PostgreSQL 16 con tablas particionadas por rangos temporales y tablas de cálculo materializadas para percentiles de latencia (P50, P90, P99).',
          bullets: [
            'Consultas de agregación con funciones ventana SQL optimizadas para series cronológicas.',
            'Verificación encadenada de firmas HMAC (Hash-Chaining) estilo ledger inmutable.',
            'Integración con volumen Docker persistente y respaldos automáticos de solo lectura.',
          ],
        },
        sec: {
          desc: 'Garantía forense de no-repudio. Cada evento registrado contiene un sello temporal RFC 3161 y es inalterable retrospectivamente.',
          bullets: [
            'Alertas proactivas ante rupturas en la cadena de firmas HMAC o desincronización de reloj.',
            'Políticas de RBAC estrictas para la visualización de datos forenses según nivel de auditor.',
            'Monitor de latencia P99 integrado con umbrales configurables para detección de degradación.',
          ],
        },
      },
    },
  ];