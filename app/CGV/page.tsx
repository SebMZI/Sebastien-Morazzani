"use client";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Page = () => {
  const variants = {
    out: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.91],
        duration: 1,
        delay: 0.15,
      },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="text-white my-20"
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        <h1 className="text-ascent font-extrabold">
          CONDITIONS GÉNÉRALES DE SERVICES
        </h1>
        <p>Date de dernière mise à jour : 25/01/2024</p>
        <h2 className="my-10 font-semibold">Article 1 – MENTION LÉGALES</h2>
        <p>
          Le présent site, accessible à l’URL{" "}
          <Link href="https://www.sebastien-morazzani.com/">
            https://www.sebastien-morazzani.com/
          </Link>{" "}
          (le « <span className="text-ascent">Site</span> »), est édité par :{" "}
          <br />
          Morazzani-Marigny Sébastien, inscrite sous le numéro 983 044 306, dont
          le siège social est situé au 6 Les Rives de l`Acheneau, 44710 Port
          Saint Père. (Ci-après désigné le « Vendeur »). <br /> Le Site est
          hébergé par la société Vercel Inc., situé 440 N Barranca Ave #4133
          Covina, CA 91723, (email :{" "}
          <Link className="text-ascent" href={"privacy@vercel.com"}>
            privacy@vercel.com
          </Link>
          ). <br /> Le Directeur de la publication du Site est Morazzani-Marigny
          Sébastien. Le Service Client du Prestataire peut être contacté : par
          email en vous adressant à{" "}
          <Link
            className="text-ascent"
            href={"mailto:contact@sebastien-morazzani.com"}
          >
            contact@sebastien-morazzani.com.
          </Link>
        </p>

        <h2 className="my-10 font-semibold">Article 2 – CHAMP D’APPLICATION</h2>
        <p>
          Les présentes conditions générales de services (les «{" "}
          <span className="text-ascent">Conditions Générales</span> ») ont pour
          objet de définir et de régir les rapports contractuels entre le
          Prestataire et tout professionnel (un «{" "}
          <span className="text-ascent">Client</span> ») désirant bénéficier des
          services proposés par Sébastien Morazzani-Marigny.
          <br />
          <br /> La fourniture des services proposés aux Clients est
          conditionnée à l’acceptation préalable sans restriction ni réserve des
          présentes Conditions Générales. Les Conditions Générales sont mises à
          la disposition des Clients sur le Site ou au dos du devis où elles
          sont directement consultables et peuvent également lui être
          communiquées sur simple demande par tout moyen.
          <br />
          <br /> Les Conditions Générales sont applicables nonobstant toute
          stipulation contraire figurant dans tous documents émanant du Client,
          et notamment dans ses conditions générales d’achat. <br />
          <br />
          Les Conditions Générales sont applicables sous réserve de toute
          stipulation contraire figurant au bon de commande ou à des conditions
          particulières le cas échéant conclues entre la Société et le Client
          concerné.
        </p>

        <h2 className="my-10 font-semibold">
          Article 3 – DESCRIPTION DES SERVICES
        </h2>
        <p>
          Le Site a pour objet la fourniture en ligne des services suivants :
          Conception de sites web, débogage de sites web, maintenance de sites
          web, consultant services digitaux. (ci-après désignés les «{" "}
          <span className="text-ascent">Services</span> »).
          <br />
          <br /> Les Services présentés sur le Site font chacun l`objet d`un
          descriptif mentionnant leurs caractéristiques essentielles. Cette
          description est susceptible de comporter des descriptions,
          photographies et graphismes qui ne sont communiqués qu’à titre
          illustratif et peuvent être modifiées/mises à jour sur le Site. Cette
          liste de services n`est pas exhaustive. Les Tarifs et modalités de
          prestations des services peuvent varier en focntion des besoins du
          Clients.
        </p>

        <h2 className="my-10 font-semibold">Article 4 – COMMANDES</h2>
        <p>
          Tout Client désirant bénéficier des Services proposés par Sébastien
          Morazzani-Marigny devra :<br /> -       prendre rendez-vous;
          <br /> -       exprimer ses besoins;
          <br /> -       prendre connaissance du devis;
          <br /> -       signer le devis;
          <br /> -       payer un acompte de 30% du montant total du devis (Voir
          Art. 5);
          <br /> -       choisir son mode de paiement (Voir Art. 6);
          <br /> -       effectuer le paiement des Services.
        </p>
        <br />
        <p>
          Sauf disposition expresse figurant sur le Site, le Client ne pourra
          pas modifier sa commande après l`avoir validée, laquelle sera ferme et
          définitive.
        </p>
        <br />
        <p>
          En passant commande, le Client accepte expressément que le Prestataire
          lui envoie une facture par voie électronique. Il pourra toutefois
          obtenir une facture papier en adressant sa demande au Service Clients.
        </p>
        <br />
        <p>
          Pour lutter contre la fraude, le Prestataire ou ses prestataires de
          paiement peuvent être amenés à demander des justificatifs
          supplémentaires au Client ou prendre attache avec ce dernier, au
          moment de l`acceptation et/ou de l’expédition de la commande. En cas
          de refus non justifié du Client de délivrer les informations et/ou
          justificatifs demandés, le Prestataire se réserve le droit de ne pas
          accepter ou d’annuler la commande sans que cela ne puisse faire
          l’objet d’une quelconque contestation.
        </p>
        <br />
        <p>
          Le Prestataire se réserve également le droit de ne pas accepter ou
          d’annuler la commande de tout Client qui aurait fourni des
          informations erronées, qui ne procèderait pas au paiement des
          Services, avec lequel existerait un litige relatif au paiement d’une
          commande antérieure ou qui présenterait un niveau de commande
          anormalement élevé.
        </p>

        <h2 className="my-10 font-semibold">
          Article 5 – CONDITIONS TARIFAIRES
        </h2>
        <p>
          Les Services sont fournis au tarif du Prestataire en vigueur fau jour
          de la commande, exprimé en euros hors taxes, TTC.
        </p>
        <br />
        <p>
          Un acompte de 30 % du prix total des Services est facturé par le
          Prestataire et exigible auprès du Client au jour de la signature du
          devis, le solde étant facturé et exigible au terme de la fourniture
          des Services.
        </p>
        <br />
        <p>
          Le tarif est ferme et ne peut être révisé pendant la durée d’exécution
          des Services, les parties renonçant expressément à se prévaloir des
          dispositions de l’article 1195 du Code Civil.
        </p>
        <br />
        <p>
          Le Prestataire se réserve toutefois le droit de modifier ses prix à
          tout moment pour tous Services qui seraient souscrits postérieurement
          à cette modification.
        </p>
        <br />
        <p>
          Des éventuelles réductions de prix, ristournes et remises pourront
          s’appliquer aux Services dans des conditions prévues ou dans tout
          autre document qui serait communiqué au Client.  En cas de tarif
          promotionnel, le Prestataire s`engage à appliquer ce tarif à toute
          commande passée durant la période de la promotion.
        </p>
        <p>
          En cas de règlement anticipé par le Client, aucun escompte ne sera
          pratiqué. En aucun cas les paiements ne peuvent être suspendus ni
          faire l`objet d`une quelconque compensation sans accord préalable et
          écrit entre le Prestataire et le Client. Toute suspension, déduction
          ou compensation opérée unilatéralement par le Client sera traitée
          comme un défaut de paiement et entraînera toutes les conséquences d’un
          retard de paiement.
        </p>
        <br />
        <p>
          Par ailleurs, il est expressément convenu que le Client est
          valablement mis en demeure de payer par la seule exigibilité de
          l`obligation, conformément aux dispositions de l`article 1344 du Code
          civil. En cas de retard de paiement de l’une quelconque des échéances,
          le Prestataire se réserve notamment le droit, sans qu’aucune indemnité
          ne soit due au Client, de : <br /> <br /> -       exiger le paiement
          immédiat de l’ensemble des sommes à devoir au titre des Services,
          celles-ci devenant immédiatement exigibles quelle que soit leur
          échéance initialement prévue ; <br /> -        refuser toute nouvelle
          commande ou exiger pour toute nouvelle commande un paiement comptant
          ou une garantie pour la bonne exécution des engagements ; <br /> -
                imputer tout paiement partiel en premier lieu sur la partie non
          privilégiée de la créance puis sur les sommes dont l`exigibilité est
          la plus ancienne ; <br /> -       réduire, suspendre ou annuler
          l’accès aux Services, 14 jours après mise en demeure restée sans
          effet, effectuée par le Prestataire auprès du Client ; <br /> -
                appliquer, sans mise en demeure préalable, à toutes les sommes
          dues, dès le premier jour de retard et jusqu`à complet paiement, des
          pénalités de retard calculées au taux visé à l’article L.441-6 du Code
          de Commerce ; <br /> et/ou -       exiger le paiement d’une indemnité
          forfaitaire de 40 € pour frais de recouvrement, pour chaque facture
          payée en retard, sans préjudice de la réparation de tout dommage
          effectivement subi.
        </p>
        <br />
        <p>
          Toute modification des tarifs résultant d’une augmentation de la taxe
          sur la valeur ajoutée ou la création de toute nouvelle taxe assise sur
          le prix des Services sera immédiatement et automatiquement appliquée.
        </p>
        <br />

        <h2 className="my-10 font-semibold">Article 6 – MODES DE PAIEMENT</h2>
        <p>
          Le Client reconnaît expressément que toute commande effectuée est une
          commande avec obligation de paiement, qui nécessite le paiement d’un
          prix contre la fourniture du Service commandé.
        </p>
        <p>
          Les commandes peuvent être payées en ayant recours à l’un des modes de
          paiement suivants :<br />
          <br /> ●           Paiement par carte bancaire. Le paiement s`effectue
          directement sur les serveurs bancaires sécurisés de la banque du
          Prestataire, les coordonnées bancaires du Client ne transitent pas sur
          le Site. Les coordonnées bancaires communiquées lors du paiement sont
          protégées par un procédé de cryptage SSL (Secure Socket Layer). Les
          cartes bancaires émises par des banques domiciliées hors de France
          doivent obligatoirement être des cartes bancaires internationales. Le
          paiement via ces cartes bancaires s`effectue au comptant, sans
          escompte
          <br />
          <br /> ●           Paiement par virement. Le Client peut régler sa
          commande par virement bancaire. Lors de la commande, le Prestataire
          communiquera les coordonnées du compte sur lequel effectuer le
          virement, ainsi que la référence de commande à indiquer dans l’ordre
          de virement.
        </p>
        <br />
        <p>
          Le cas échéant, la commande validée par le Client ne sera considérée
          comme confirmée que lorsque le Prestataire aura pu s’assurer de la
          validité du règlement.
        </p>

        <h2 className="my-10 font-semibold">
          Article 7 – OBLIGATIONS DU PRESTATAIRE
        </h2>
        <p>
          Le Client reconnaît expressément que toute commande effectuée est une
          commande avec obligation de paiement, qui nécessite le paiement d’un
          prix contre la fourniture du Service commandé.
        </p>
        <p>
          Le Prestataire s`engage à mettre en œuvre toutes les diligences
          requises pour la réalisation des Services de développement web et de
          ses obligations en vertu des présentes Conditions Générales, ainsi que
          de toute autre documentation conclue avec les Clients, tout en
          respectant les dispositions législatives et réglementaires en vigueur
          ainsi que les droits de tiers.
        </p>
        <br />
        <p>
          Le Prestataire déclare posséder les compétences, l`expérience et les
          ressources nécessaires pour fournir les Services de développement web,
          et il assume la pleine responsabilité tant de la prestation des
          Services que de l`organisation du travail de son personnel le cas
          échéant.
        </p>
        <br />
        <p>
          Cependant, le Prestataire reconnaît que l`accès et le fonctionnement
          des sites web développés peuvent être temporairement interrompus dans
          certaines situations, notamment en cas de force majeure, de
          dysfonctionnements des équipements ou du réseau internet des Clients,
          de défaillance des opérateurs de télécommunication, d`interruption de
          fourniture d`électricité, d`utilisation anormale, illicite ou
          frauduleuse des sites web par un Client ou un tiers, de décision des
          autorités compétentes, ou pour tout autre motif.
        </p>
        <br />
        <p>
          Le Prestataire se réserve également le droit d`apporter aux sites web
          et aux Services de développement web toutes les modifications et
          améliorations de son choix liées à l`évolution technique ou au bon
          fonctionnement.
        </p>
        <br />
        <p>
          Les interruptions générales et temporaires des sites web et des
          Services de développement web seront, dans la mesure du possible,
          notifiées aux Clients via les sites web avant qu`elles ne surviennent,
          sauf en cas d`urgence.
        </p>

        <h2 className="my-10 font-semibold">
          Article 8 – OBLIGATIONS DU CLIENT
        </h2>
        <p>
          Le Client s`engage à fournir au Prestataire toutes les informations,
          documents, et accès nécessaires pour permettre la réalisation des
          Services de développement web de manière efficace et en temps voulu.
          Cela comprend, sans s`y limiter, la communication de spécifications
          détaillées, de contenus, d`accès aux serveurs et aux bases de données,
          ainsi que toute autre information pertinente.
        </p>
        <br />
        <p>
          Le Client est responsable de s`assurer que les informations fournies
          sont exactes, complètes et conformes aux exigences du projet. Tout
          retard dans la fourniture de ces informations peut entraîner un délai
          supplémentaire dans la réalisation des Services de développement web,
          et le Client en est informé.
        </p>
        <br />
        <p>
          Le Client est responsable de la sauvegarde de ses propres données et
          de la protection de ses systèmes contre toute perte ou dommage
          potentiel. Le Prestataire ne peut pas être tenu responsable de la
          perte de données ou de tout préjudice résultant de la négligence du
          Client dans ce domaine.
        </p>
        <br />
        <p>
          Le Client s`engage à respecter les délais de paiement convenus
          conformément à l`article 4 des présentes Conditions Générales. Tout
          retard de paiement peut entraîner des conséquences, y compris des
          pénalités de retard, telles que stipulées dans l`article 5.
        </p>
        <br />
        <p>
          En cas de non-respect par le Client de l`une de ses obligations
          énoncées dans les présentes Conditions Générales, le Prestataire se
          réserve le droit de prendre des mesures appropriées pour résoudre la
          situation, y compris la suspension temporaire ou la résiliation des
          Services de développement web, conformément aux termes de l`article 8.
        </p>
        <br />
        <p>
          Le Client est également tenu de se conformer à toutes les lois,
          règlements et normes en vigueur dans le cadre de l`utilisation des
          Services de développement web, notamment en ce qui concerne la
          propriété intellectuelle, la confidentialité des données et la
          conformité réglementaire.
        </p>

        <h2 className="my-10 font-semibold">Article 9 – RECLAMATIONS</h2>
        <p>
          En cas de non-exécution ou d`exécution défectueuse des Services de
          développement web, le Client est tenu de notifier immédiatement le
          Prestataire et de formuler ses griefs et réserves dans un délai de
          trente (30) jours calendaires suivant la date à laquelle il en a
          connaissance. Cette notification est essentielle pour permettre aux
          parties de rechercher une solution satisfaisante.
        </p>
        <p>
          Les parties s`engagent à faire leurs meilleurs efforts pour parvenir à
          un règlement amiable de la situation dans un délai de trente (30)
          jours calendaires à compter de la notification initiale du Client. Le
          Prestataire s`engage à prendre toutes les mesures nécessaires pour
          remédier à tout défaut ou problème signalé par le Client.
        </p>
        <br />
        <p>
          En cas de non-règlement amiable dans les conditions mentionnées
          ci-dessus et en présence d`une inexécution suffisamment grave des
          Services par le Prestataire, le Client peut demander des dommages et
          intérêts au Prestataire afin de réparer le préjudice subi. Le Client
          renonce expressément à solliciter une exécution forcée en nature des
          Services par le Prestataire ou un tiers, ou une réduction
          proportionnelle du prix, conformément aux dispositions des articles
          1221, 1222 et 1223 du Code civil.
        </p>

        <h2 className="my-10 font-semibold">
          Article 10 - RESPONSABILITE DU PRESTATAIRE
        </h2>
        <p>
          Le Prestataire est tenu à une obligation de moyens en ce qui concerne
          la fourniture des Services de développement web..
        </p>
        <p>
          Chaque Client reconnaît les contraintes et les limites des réseaux
          Internet et comprend qu`il ne peut pas rechercher la responsabilité du
          Prestataire pour les dysfonctionnements dans l`accès aux Services, les
          vitesses d`ouverture et de consultation des pages des Services,
          l`inaccessibilité temporaire ou permanente des Services, ou
          l`utilisation frauduleuse par des Clients ou des tiers du Site.
        </p>
        <br />
        <p>
          La responsabilité du Prestataire ne saurait davantage être engagée:
          <br />
          <br /> -       En cas de manquement à une obligation résultant d`un
          cas fortuit ou d`un évènement de force majeure au sens de l`article
          1218 du Code Civil, y compris, mais sans s`y limiter, des évènements
          imprévisibles tels que grèves, arrêts de travail, troubles sociaux,
          fermetures d’usines, inondations, incendies, défaut de production ou
          de transport non-consécutif à son fait personnel, rupture
          d’approvisionnement, guerres, émeutes, insurrections, et plus
          généralement toute circonstance ou événement empêchant le Prestataire
          d’exécuter convenablement ses obligations;
          <br /> -       Si les informations, données, instructions, directives,
          matériels ou supports communiqués par le Client sont erronés ou
          incomplets, et plus généralement dans le cas où l’inexécution ou
          l’exécution défectueuse des Services résulte en tout ou partie du
          comportement, d’un manquement ou d’une carence du Client;
          <br /> -       Si les fonctionnalités du Site s`avèrent incompatibles
          avec certains équipements et/ou fonctionnalités du matériel
          informatique d’un Client.
        </p>
        <br />
        <p>
          Chaque Client est responsable des contenus et informations importés,
          stockés et/ou publiés sur le Site et s’engage à ne pas employer de
          mesures techniques pour contourner les mesures de protection mises en
          place par le Prestataire.
        </p>
        <br />
        <p>
          Chaque Client est responsable de la sauvegarde de ses données,
          fichiers et documents, et renonce à rechercher la responsabilité du
          Prestataire en cas de dommages survenus à ces éléments dans le cadre
          de l`utilisation du Site et/ou des Services.
        </p>
        <br />
        <p>
          En tout état de cause, le Prestataire n`encourt aucune responsabilité
          au titre de tous dommages indirects ou immatériels, tels que le
          préjudice financier, la perte de chance, la perte de profit, la perte
          de contrat, la perte de commande, la perte de clientèle, la perte
          d`exploitation, le préjudice ou trouble commercial, ou le préjudice
          d`image
        </p>
        <br />
        <p>
          {" "}
          La responsabilité du Prestataire ne peut excéder un montant égal au
          prix hors taxes perçu auprès du Client au titre de la fourniture des
          Services au cours des douze (12) derniers mois.
        </p>
        <br />
        <p>
          Conformément aux dispositions de l`article 2254 du Code Civil, toute
          action judiciaire d`un Client à l`égard du Prestataire est atteinte
          par la prescription à l`expiration d`une durée d`un (1) an suivant la
          date à laquelle le Client concerné a eu connaissance ou est présumé
          avoir eu connaissance du fait dommageable.
        </p>

        <h2 className="my-10 font-semibold">
          Article 11 – SYSTÈMES D’ENREGISTREMENT
        </h2>
        <p>
          Les registres informatisés, conservés dans les systèmes informatiques
          du Prestataire et de ses partenaires dans des conditions raisonnables
          de sécurité, seront considérés comme les preuves des communications et
          actions des Clients et du Prestataire. L’archivage de ces éléments est
          effectué sur un support fiable et durable de manière à correspondre à
          une copie fidèle et durable au sens de la réglementation applicable.
        </p>
        <br />
        <p>
          Chaque Client reconnaît la valeur de preuve des systèmes
          d’enregistrement automatisés du Site et déclare renoncer à les
          contester en cas de litige.
        </p>

        <h2 className="my-10 font-semibold">
          Article 12 – DONNÉES PERSONNELLES
        </h2>
        <p>
          Vous avez le droit de demander la suppression de vos données
          personnelles si vous estimez que leur traitement n`est plus nécessaire
          aux fins pour lesquelles elles ont été collectées ou si vous retirez
          votre consentement. Vous pouvez également demander la suppression de
          vos données si vous vous opposez au traitement, si le traitement est
          illicite ou si nous sommes légalement tenus de le faire. Pour exercer
          votre droit à la suppression de vos données personnelles, veuillez
          nous contacter en utilisant les coordonnées fournies:
          contact@sebastien-morazzani.com. Nous traiterons votre demande dans un
          délai raisonnable conformément aux exigences légales.
        </p>

        <h2 className="my-10 font-semibold">Article 13 – LIENS HYPERTEXTES</h2>
        <p>
          Les liens hypertextes disponibles sur le Site peuvent renvoyer vers
          des sites tiers ou partenaires. Ils sont fournis uniquement pour la
          convenance du Client, afin de faciliter l’utilisation des ressources
          disponibles sur l’Internet. Si le Client utilise ces liens, il
          quittera le Site et acceptera alors d’utiliser les sites tiers à ses
          risques et périls ou le cas échéant conformément aux conditions qui
          les régissent.
        </p>
        <br />
        <p>
          En tout état de cause, l’existence d’un lien hypertexte vers le Site
          en provenance d’un site tiers ou sur le Site vers un site tiers ou de
          partenaire ne saurait engager la responsabilité du Prestataire à
          quelque titre que ce soit et notamment quant à la disponibilité, aux
          contenus et aux produits et/ou services disponibles sur ou à partir de
          ce site tiers ou partenaire.
        </p>

        <h2 className="my-10 font-semibold">
          Article 14 – PROPRIÉTÉ INTELLECTUELLE
        </h2>
        <p>
          Jusqu`à ce que le Client ait effectué le paiement intégral des
          Services de Développement Web fournis par le Prestataire, tous les
          éléments liés à ces Services, y compris, mais sans s`y limiter, les
          codes sources, les designs, les graphiques, les modèles, les logos,
          les bases de données, les logiciels, et toute autre création originale
          (ci-après désignés collectivement comme les &apos;Éléments du
          Développement Web&apos;), demeureront la propriété exclusive du
          Prestataire.
        </p>
        <br />
        <p>
          Une fois que le paiement intégral des Services de Développement Web a
          été reçu par le Prestataire, tous les droits de propriété
          intellectuelle sur les Éléments du Développement Web seront transférés
          au Client, sous réserve de tout autre accord écrit entre les parties
        </p>
        <br />
        <p>
          Le Client s`engage à ne pas utiliser, reproduire, copier, distribuer
          ou exploiter les Éléments du Développement Web à des fins autres que
          celles expressément convenues dans le cadre du contrat de prestation
          de services conclu avec le Prestataire.
        </p>
        <br />
        <p>
          En cas de non-paiement intégral des Services de Développement Web, le
          Prestataire se réserve le droit de révoquer tout droit d`utilisation
          accordé au Client concernant les Éléments du Développement Web.
        </p>
        <br />
        <p>
          Le Prestataire conserve le droit de mentionner son travail pour le
          Client à des fins de promotion et de portfolio, même après le
          transfert de propriété des Éléments du Développement Web au Client.
        </p>

        <h2 className="my-10 font-semibold">
          Article 15 – DURÉE – SUSPENSION - RÉSILIATION
        </h2>
        <p>
          Les présentes Conditions Générales régissent la prestation de services
          de développement web et sont conclues pour la durée nécessaire à
          l`achèvement de cette prestation, telle que spécifiée dans le contrat
          de prestation de services conclu entre le Prestataire et le Client. En
          cas de vente ponctuelle ou d`accord sur une durée spécifique, les
          Conditions Générales s`appliquent pour la période convenue dans le
          contrat.
        </p>
        <br />
        <p>
          Le Prestataire se réserve le droit de suspendre temporairement ou de
          résilier immédiatement la prestation des Services de Développement Web
          en cas de violation substantielle par le Client de ses obligations
          découlant des présentes Conditions Générales ou en vertu des lois et
          réglementations applicables. Cette suspension ou résiliation peut être
          temporaire ou permanente, selon la gravité du manquement.
        </p>
        <br />
        <p>
          Le Prestataire ou le Client peut résilier les présentes Conditions
          Générales de plein droit en envoyant une notification écrite dans les
          situations suivantes :<br />
          <br /> -        En cas de force majeure, comme défini à l`article 10
          ci-avant ;<br /> -        En cas de manquement grave de l`autre partie
          à ses obligations en vertu des présentes Conditions Générales, à
          condition que la partie en faute n`ait pas remédié à ce manquement
          dans un délai de quinze (15) jours (lorsque cela est possible) suivant
          une notification écrite indiquant la nature du manquement et la
          nécessité de le corriger.
        </p>

        <h2 className="my-10 font-semibold">Article 16 - CONFIDENTIALITÉ</h2>
        <p>
          Pendant la durée des présentes, chaque partie peut être amenée à avoir
          accès à des informations, des documents et/ou des données
          confidentiels de l`autre partie liés aux Services de Développement
          Web. En conséquence, chaque partie s`engage, ainsi que ses préposés
          agissant en son nom, à maintenir la stricte confidentialité de toutes
          les informations, documents et/ou données confidentiels de toute
          nature relatifs aux résultats, à l`activité ou à la clientèle de
          l`autre partie, ainsi que de toute information reçue ou obtenue de
          l`autre partie dans le cadre de la prestation de services.
        </p>
        <br />
        <p>
          L`engagement de confidentialité des parties demeure en vigueur pendant
          la durée des présentes et continue de s`appliquer pendant une période
          de deux (2) ans suivant leur expiration ou leur résiliation.
        </p>

        <h2 className="my-10 font-semibold">Article 17 - NOTIFICATIONS</h2>
        <p>
          Toute communication ou notification écrite requise ou autorisée en
          vertu des présentes sera considérée comme valide si elle est envoyée
          par l`une des méthodes suivantes :<br />
          <br /> - Remise en mains propres ou par porteur avec accusé de
          réception.
          <br /> - Courrier recommandé avec accusé de réception.
          <br /> - Courrier électronique (sauf en cas de résiliation des
          présentes).
        </p>
        <br />
        <p>
          Les communications doivent être adressées aux coordonnées de la partie
          concernée, chaque partie choisissant son domicile au sein de son siège
          social.
        </p>
        <br />
        <p>
          Tout changement de coordonnées d`une partie aux fins des présentes
          doit être notifié à l`autre partie conformément aux modalités
          ci-dessus.
        </p>
        <br />
        <p>
          Les communications remises en mains propres ou par porteur seront
          réputées avoir été effectuées à la date de réception par le
          destinataire, attestée par un accusé de réception. Les communications
          envoyées par courrier recommandé avec accusé de réception seront
          réputées avoir été effectuées à la date de la première présentation à
          l`adresse du destinataire. Les communications par courrier
          électronique seront réputées avoir été effectuées à la date d`envoi du
          courrier électronique.
        </p>

        <h2 className="my-10 font-semibold">
          Article 18 - AUTONOMIE ET ABSENCE DE RENONCIATION
        </h2>
        <p>
          Si l`une quelconque des stipulations des présentes Conditions
          générales était déclarée nulle ou inapplicable pour quelque cause que
          ce soit en application d`une loi, d`un règlement ou à la suite d`une
          décision de justice devenue définitive, elle serait réputée non écrite
          et les autres stipulations resteraient en vigueur.
        </p>
        <br />
        <p>
          Le fait pour le Prestataire de ne pas exercer temporairement ou
          durablement l`une ou plusieurs des dispositions des présentes
          Conditions Générales ne sera en aucun cas interprété comme une
          renonciation à ces dispositions.
        </p>

        <h2 className="my-10 font-semibold">Article 19 – MODIFICATION</h2>
        <p>
          Le Prestataire se réserve le droit de modifier à tout moment et sans
          préavis le contenu ou la localisation du Site, les Services et les
          présentes Conditions Générales.
        </p>
        <br />
        <p>
          Toute utilisation du Site ou des Services consécutive à une
          modification apportée aux Conditions Générales emportera acceptation
          par chaque Client desdites modifications. La version la plus récente
          et en vigueur des Conditions Générales sera toujours disponible à
          l’adresse suivante : https://www.sebastien-morazzani.com/CGV
        </p>

        <h2 className="my-10 font-semibold">Article 20 - LITIGES</h2>
        <p>
          Les litiges qui pourront survenir dans le cadre des relations
          contractuelles établies entre le Client et le Prestataire devront être
          résolus, dans la mesure du possible, de manière amiable.
        </p>
        <br />
        <p>
          À défaut de règlement amiable dans un délai d`un mois à compter de la
          saisine de l`une des parties, tous les litiges découlant des présentes
          Conditions Générales, y compris leur validité, interprétation,
          exécution, résiliation, conséquences et suites, seront soumis à la
          compétence exclusive du tribunal de Nantes.
        </p>

        <h2 className="my-10 font-semibold">
          Article 21 - DROIT APPLICABLE & LANGUE DU CONTRAT
        </h2>
        <p>
          Les présentes Conditions Générales et toutes les opérations qui en
          découlent sont régies et soumises au droit français.
        </p>
        <br />
        <p>
          Les présentes Conditions Générales sont rédigées en langue française.
          En cas de traduction en une ou plusieurs langues étrangères, seul le
          texte français fera foi en cas de litige.
        </p>
      </motion.main>
    </AnimatePresence>
  );
};

export default Page;
